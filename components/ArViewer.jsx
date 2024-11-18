import { Viro3DObject, ViroAmbientLight, ViroARScene, ViroARSceneNavigator, ViroBox, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { Text, View } from "react-native";

const models = [
    {
        target: 'microscope',
        model: require('../res/microscope/microscope.obj'),
        type: 'OBJ',
        scale: [.1, .1, .1],
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
    }
]

export default function ArViewerC (){

    const CardScene = () => {
        return (
            <ViroARScene>
                <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>
                <Viro3DObject
                    type="OBJ"
                    postion={[0, 0, -1]}
                    scale={[.1, .1, .1]}
                    source={require('../res/petri/petri.obj')}
                    resources={[require('../res/petri/bacteria_image.jpg')]}
                />
                <Viro3DObject
                    type="OBJ"
                    postion={[0, 2, -1]}
                    scale={[.1, .1, .1]}
                    source={require('../res/balanza/Gramera.obj')}
                />
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