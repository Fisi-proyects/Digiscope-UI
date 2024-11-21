import { ViroAnimations, ViroARSceneNavigator, ViroARTrackingTargets, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { View } from "react-native";
import { useState } from "react";
import { data_models } from "../data/models";
import { MicroscopeScene } from "./scenes/MicroscopeScene";
import { MatrazScene } from "./scenes/MatrazScene";
import { TestTubesScene } from "./scenes/TestTubesScene";
import { PipetaScene } from "./scenes/PipetaScene";
import { JeringaScene } from "./scenes/JeringaScene";
import { PetriScene } from "./scenes/PetriScene";
import { MecheroScene } from "./scenes/MecheroScene";
import { ProbetaScene } from "./scenes/ProbetaScene";
import { BalanzaScene } from "./scenes/BalanzaScene";
import { ARModelSlider } from "./ARModelSlider";

const models = data_models;
const scenes = {
    microscope: MicroscopeScene,
    matraz: MatrazScene,
    mechero: MecheroScene,
    mezcladora: MecheroScene,
    test_tubes: TestTubesScene,
    probeta: ProbetaScene,
    balanza: BalanzaScene,
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


    const handleSceneChange = (sceneKey) => {
        setCurrentScene(sceneKey);
        sceneNavigator.replace(sceneKey, { scene: scenes[sceneKey] });
    };

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
                initialScene={{ scene: scenes[currentScene], key: currentScene }}
                style={{ flex: 1, width: "100%", height: "100%" }}
            />
            <View style={{ paddingBottom: 65, backgroundColor: "#f3f7fe" }}>
                {/* 
                    No se puede hacer transparente a menos
                    que sea renderizado dentro del scenenavigator, 
                    pero la librería parece que no deja eksdi
                */}
                <ARModelSlider 
                    models={models} 
                    currentScene={currentScene} 
                    handleSceneChange={handleSceneChange} 
                />
            </View>
        </View>
    );
}
