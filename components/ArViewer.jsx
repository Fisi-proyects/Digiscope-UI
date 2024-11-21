import { Viro3DObject, ViroAmbientLight, ViroAnimations, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { Text, View } from "react-native";
import ArCards from "./ArCards";

const models = [
    {
        target: 'microscope',
        model: require('../res/microscope/mikro1.obj'),
        type: 'OBJ',
        scale: [.6, .6, .6],
        resources: [],
    },
    {
        target: 'matraz',
        model: require('../res/matraz1/matraz1.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },
    {
        target:'mechero',
        model: require('../res/mechero/mechero.obj'),
        type: 'OBJ',
        resources: [],
        scale: [.1, .1, .1],
    },
    {
        target: 'mezcladora',
        model: require('../res/mezcladora/mezcladora.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },
    {
        target: 'test_tubes',
        model: require('../res/tubos_ensayo/tubos_ensayo.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },
    {
        target:'probeta',
        model: require('../res/probeta/tubos_medidor.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },
    {
        target:'balanza',
        model: require('../res/balanza/Gramera.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },
    {
        target:'pipeta',
        model: require('../res/pipete/pipete.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },
    {
        target:'agarradera',
        model: require('../res/agarradera/agarradera.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    },{
        target:'mechero',
        model: require('../res/mechero/mechero.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
        resources: [],
    }

]



export default function ArViewerC (){


    ViroAnimations.registerAnimations({
        grow:{
        properties:{
            scaleX:.1,
            scaleY:.1,
            scaleZ:.1
        }, 
        duration:500, //.25 seconds
        easing:"EaseInEaseOut"
        },
        rotate:{
        properties:{
            rotateY:"+=20"
        },
        duration:500, //.25 seconds
        }
    })

    ViroARTrackingTargets.createTargets({
        'microscope':{
            source: require('../res/cards/microscope.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'matraz':{
            source: require('../res/cards/matraz.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'mechero':{
            source: require('../res/cards/mechero.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'mezcladora':{
            source: require('../res/cards/mezcladora.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'test_tubes':{
            source: require('../res/cards/test_tubes.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'probeta':{
            source: require('../res/cards/probeta.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'balanza':{
            source: require('../res/cards/balanza.jpg'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'pipeta':{
            source: require('../res/cards/pipeta.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        },
        'agarradera':{
            source: require('../res/cards/agarradera.png'),
            orientation: 'Up',
            physicalWidth: 0.1
        }
    })

    const CardScene = () => {
        return (
            <ViroARScene>
                <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>
                <Viro3DObject 
                    scale={[.1, .1, .1]}
                    position={[0,0,-1]}
                    type="OBJ"
                    source={require('../res/tubos_ensayo/tubos_ensayo.obj')}
                />
                {models.map((model, index) => {
                    return (
                        <ArCards
                            key={index}
                            target={model.target}
                            type={model.type}
                            scale={model.scale}
                            model={model.model}
                            onAnchorFound={() => console.log("Encontrado")}
                         />
                    )
                })}
            </ViroARScene>
        )
    }

    const onInitialized = (state, reason) => {
        if(state === ViroTrackingStateConstants.TRACKING_NORMAL){
            console.log("Trackeo normal");
        } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE){
            console.log("Trackeo no disponible");
        }
    }

    return (
        <View style={{flex:1, width: "100%", height:"100%"}}>
            <ViroARSceneNavigator
                autofocus={true}
                initialScene={{scene: CardScene}}
                style={{flex: 1, width: "100%", height: "100%"}}
                />

        </View>
    );
}