import { ViroAmbientLight, ViroARScene, ViroARSceneNavigator, ViroBox, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { Text, View } from "react-native";

export default function ArViewerC (){

    const CardScene = () => {
        return (
            <ViroARScene>
                <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>
                <ViroBox position={[0, -1, -2]} scale={[.5, .5, .1]}/>
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