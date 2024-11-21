import { Viro3DObject, ViroAmbientLight, ViroAnimations, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox, ViroNode, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { StyleSheet,FlatList, Text, View, Pressable } from 'react-native';
import { useState } from "react";






const freeScene = (props) => {


    return (
        <ViroARScene>
            <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>
            <ViroNode
                position={[0, 0, -1]}
            >
            </ViroNode>

        </ViroARScene>
    )
}

export default function ARFree (){
    const [object, setObject] = useState('microscope');
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

    return (
        <View style={{flex:1, width: "100%", height:"100%"}}>
            <ViroARSceneNavigator
                autofocus={true}
                initialScene={{scene: freeScene}}
                style={{flex: 1, width: "100%", height: "100%"}}
                viroAppProps={{object:object}}
                />
            <View style={styles.container} >


            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#25292e',
        display: "flex",
        width: "100%",
        height: 160,
    },
    textbutton:{
        color: "white",
        fontSize: 18,
        fontWeight: "700"
    },
    button:{
        backgroundColor: "#8c4ff1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        width: 100,
        height: 80,
        margin: 10,
        padding: 10,
        width: 120,

    }
})