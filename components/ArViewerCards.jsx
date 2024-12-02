import { Viro3DObject, ViroAmbientLight, ViroAnimations, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox, ViroNode, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { StyleSheet,FlatList, Text, View, Pressable } from 'react-native';
import { useState } from "react";
import { data_models } from "../data/models";



ViroARTrackingTargets.createTargets({
    'microscope': {
        source: require('../res/cards/microscope.jpg'),
        orientation: 'Up',
        physicalWidth: 0.1
    },
    'matraz': {
        source: require('../res/cards/matraz.jpg'),
        orientation: 'Up',
        physicalWidth: 0.13
    },
    'mechero': {
        source: require('../res/cards/mechero.png'),
        orientation: 'Up',
        physicalWidth: 0.2
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
        physicalWidth: 0.02
    },
    'petri': {
        source: require('../res/cards/petri.jpg'),
        orientation: 'Up',
        physicalWidth: .5
    },
    'jeringa':{
        source: require('../res/cards/jeringa.jpg'),
        orientation: 'Up',
        physicalWidth: 0.1
    }
})



const cardScene = (props) => {


    return (
        <ViroARScene>
            <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>    
            {data_models.map((item, index) => {
                return (
                    <ViroARImageMarker
                        key={index}
                        target={item.target}
                    >
                        <Viro3DObject 
                            source={item.model}
                            type={item.type}
                            scale={item.scale}
                        />
                        <ViroAmbientLight color="#ffffff" />
                    </ViroARImageMarker>
                )
            })}
        </ViroARScene>
    )
}

export default function ArCards (){
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
                initialScene={{scene: cardScene}}
                style={{flex: 1, width: "100%", height: "100%"}}
                viroAppProps={{object:object}}
                />
            <View style={styles.container} >


            </View>
        </View>
    );

}

const styles = StyleSheet.create({
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