import { Viro3DObject, ViroAmbientLight, ViroAnimations, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox, ViroNode, ViroTrackingStateConstants } from "@reactvision/react-viro";
import { StyleSheet,FlatList, Text, View, Pressable } from 'react-native';
import { data_models } from "./models";
import { useState } from "react";

const data = data_models;





const freeScene = (props) => {
    let  data = props.SceneNavigator.viroAppProps;

    const render = () =>{
        switch(data.object){
             case 'microscope':
                return (
                    <Viro3DObject
                        source={require('../res/microscope/mikro1.obj')}
                        position={[0, 0, -1]}
                        scale={[.1, .1, .1]}
                        type="OBJ"
                        animation={{
                            name:"rotate",
                            run:true,
                            loop:true
                        }}
                    />
                )
            case 'matraz':
                return (
                    <Viro3DObject
                        source={require('../res/matraz1/matraz1.obj')}
                        position={[0, 0, -1]}
                        scale={[.1, .1, .1]}
                        type="OBJ"
                        animation={{
                            name:"rotate",
                            run:true,
                            loop:true
                        }}
                    />
                )
            default:
                return null;
        }
    }


    return (
        <ViroARScene>
            <ViroAmbientLight color="#ffffff" influenceBitMask={1}/>
            <ViroNode
                position={[0, 0, -1]}
            >
                {render()}
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
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({item, index}) =>(
                        <View>
                            <Pressable style = {styles.button}  onPress={ 
                                ()=>{
                                    setObject(item.target);
                                }
                            }>
                                <Text style = {styles.textbutton}>{item.target}</Text>
                            </Pressable>
                        </View>

                    )}
                />


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