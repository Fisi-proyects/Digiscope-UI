import { StyleSheet, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, usePathname } from "expo-router";
export default function Navigate(){

    const [selected, setSelected] = useState(1);
    const pathname = usePathname();

    const handleSelected = (index) =>{
        setSelected(index);
    }
    
    useEffect(() => {
        if (pathname.includes('ar_viewer')) {
            setSelected(0);
        }if (pathname.includes('aprendizaje')) {
            setSelected(1);
        }
        if (pathname.includes('help')) {
            setSelected(2);
        }
    }, [pathname]);


    return(
        <View style={styles.container}
            behavior="none"
        >
            <Link href="/select" asChild  key ={0} >
                <TouchableOpacity style={styles.icons} onPress ={()=>{
                    handleSelected(0);
                }} >
                    <MaterialCommunityIcons name="line-scan" size={24} color={selected === 0 ? '#79DA9E': 'black'} />
                </TouchableOpacity>
            </Link>
            <Link href="/aprendizaje" asChild  key ={1} >
                <TouchableOpacity style={styles.icons} onPress={()=>{
                    handleSelected(1);
                }} >
                    <FontAwesome5 name="book" size={24} color={selected === 1 ? '#79DA9E': 'black'} />
                </TouchableOpacity>
            </Link>
            <Link href="/help" asChild  key ={2} >
                <TouchableOpacity style={styles.icons} onPress={()=>{
                    handleSelected(2);
                }} >
                    <MaterialCommunityIcons name="comment-question-outline" size={24} color={selected === 2 ? '#79DA9E': 'black'} />
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        padding: 10,
        bottom: 0,
        width: '100%',
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: 'white',
        elevation: 20,
        borderColor: '#ddd',
        borderTopWidth: 1,

    },
    icons:{
        height:40,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        color:'green'
    }
})