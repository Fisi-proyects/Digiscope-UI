import { Viro3DObject, ViroAmbientLight, ViroAnimations, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { Button, Text, View } from "react-native";
import ArCards from "./ArCards";
import { useState } from "react";
import { data_models } from "./models";
import { MicroscopeScene } from "./scenes/MicroscopeScene";
import { MatrazScene } from "./scenes/MatrazScene";
import { TestTubesScene } from "./scenes/TestTubesScene";
import { PipetaScene } from "./scenes/PipetaScene";
import { JeringaScene } from "./scenes/JeringaScene";
import { PetriScene } from "./scenes/PetriScene";

const models = data_models;
const scenes = {
    microscope: MicroscopeScene,
    matraz: MatrazScene,
    test_tubes: TestTubesScene,
    pipeta: PipetaScene,
    jeringa: JeringaScene,
    petri: PetriScene,
}

export default function ArViewerC() {
    // const [targetFound, setTargetFound] = useState("");
    const [currentScene, setCurrentScene] = useState("microscope");

    ViroAnimations.registerAnimations({
        grow: {
            properties: {
                scaleX: .1,
                scaleY: .1,
                scaleZ: .1
            },
            duration: 500, //.25 seconds
            easing: "EaseInEaseOut"
        },
        rotate: {
            properties: {
                rotateY: "+=20"
            },
            duration: 500, //.25 seconds
        }
    })

    ViroARTrackingTargets.createTargets({
        'microscope': {
            source: require('../res/cards/microscope.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'matraz': {
            source: require('../res/cards/matraz.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'mechero': {
            source: require('../res/cards/mechero.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'mezcladora': {
            source: require('../res/cards/mezcladora.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'test_tubes': {
            source: require('../res/cards/test_tubes.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'probeta': {
            source: require('../res/cards/probeta.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'balanza': {
            source: require('../res/cards/balanza.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'pipeta': {
            source: require('../res/cards/pipeta.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
    })


    // const onAnchorFound = (newTarget, e) => {
    //     console.log("Encontrado ahora: " + newTarget)
    //     setTargetFound(newTarget);
    // }

    const handleSceneChange = (sceneKey) => {
        setCurrentScene(sceneKey);
        sceneNavigator.jump(sceneKey, { scene: scenes[sceneKey] });
    };

    // const CardScene = () => {
    //     return (
    //         <ViroARScene>
    //             <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>
    //             {models.map((model, index) => {
    //                 return (
    //                     <ArCards
    //                         key={index}
    //                         target={model.target}
    //                         type={model.type}
    //                         scale={model.scale}
    //                         model={model.model}
    //                         onAnchorFound={(e) => onAnchorFound(model.target, e) }
    //                     />
    //                 )
    //             })}
    //         </ViroARScene>
    //     )
    // }

    const onInitialized = (state, reason) => {
        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
            console.log("Trackeo normal");
        } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
            console.log("Trackeo no disponible");
        }
    }

    // console.log("New target: " + targetFound );

    return (
        <View style={{ flex: 1, width: "100%", height: "100%" }}>
            <ViroARSceneNavigator
                ref={(navigator) => { this.sceneNavigator = navigator; }}
                autofocus={true}
                // initialScene={{scene: CardScene}}
                initialScene={{ scene: scenes[currentScene], key: currentScene }} // te odio
                style={{ flex: 1, width: "100%", height: "100%" }}
            />
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", paddingBottom: 100 }}>
                {models.map((model, index) => {
                    return (
                        <View key={index} style={{ width: "25%", padding: 5 }}>
                            <Button
                                title={model.target}
                                onPress={() => {
                                    // setCurrentScene(model.target);
                                    handleSceneChange(model.target);
                                    console.log(currentScene);
                                }}
                            />
                        </View>
                    )
                })}
            </View>
        </View>
    );
}