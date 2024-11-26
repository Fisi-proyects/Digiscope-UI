import { Link, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, StyleSheet, TouchableOpacity, Platform, StatusBar, View, Image} from "react-native";
import { lessonsData } from "./LessonsData";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function DetailLesson(){

    const {id} = useLocalSearchParams();
    const lesson = lessonsData.find(lesson => lesson.id === parseInt(id)); 

    const isLessonOne = lesson.id === 1;

    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.layout}>

                    <Link href={'/aprendizaje/lessons'}  asChild>
                        <TouchableOpacity style={styles.buttonBack}>
                            <AntDesign name='arrowleft' size={28} color='white' />
                        </TouchableOpacity>
                    </Link>

                    <View style={{margin:10}}>
                        <Text style={[styles.title, {margin:40}]}>
                            Lección N°{id}: {lesson.tool}
                        </Text>
                    </View>
                    <View style={{ width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('../../assets/leccion1.jpeg')} style={{width:300, height:300}}  />
                    </View>
                </View>





                <View style={styles.subprincipalContainer}>
                {isLessonOne ? (
                        <>
                            <Text style={styles.text}>{lesson.description}</Text>
                            <Text style={styles.subtitle}>Clasificación de Materiales de Laboratorio:</Text>
                            <Text style={styles.text}>{lesson.characteristics}</Text>
                            <Text style={styles.subtitle}>Objetivo de las Lecciones:</Text>
                            <Text style={styles.text}>{lesson.instruction}</Text>
                        </>
                    ) : (
                        <>
                            {lesson.description.split('.').map((description, index) => (
                                <Text key={index} style={[styles.text,]}>{description.trim()}</Text>
                            ))}   
                            
                            <Text style={[styles.subtitle, {marginTop:-2}]}>Características:</Text>

                            {lesson.characteristics.split('\n').map((charac, index) => (
                                <View style={{display:'flex',padding:2, gap:2}} >
                                    <Text style={{fontWeight:'600', fontSize:15, marginVertical:4}} >{charac.trim().split(':')[0]}:</Text>
                                    <Text key={index} style={[styles.text, {marginLeft:10}]} >{charac.trim().split(':')[1]}</Text>
                                </View>
                            ))}

                            <Text style={styles.subtitle}>Instrucciones de Uso:</Text>

                            {lesson.instruction.split('\n').map((instruction, index) => (
                                <View style={{display:'flex', flexDirection:'row',paddingHorizontal:10, gap:10, marginVertical:4}} >
                                    <Text style={{fontWeight:'600'}}>{index+1}.</Text>
                                    <Text key={index} style={[styles.text, {marginRight:20}]}>{instruction.trim()}</Text>
                                </View>
                            ))}

                            <Text style={styles.subtitle}>Precauciones:</Text>

                            {lesson.caution.split('\n').map((caution, index) => (
                                <View style={{display:'flex', flexDirection:'row',paddingHorizontal:10, gap:10, marginVertical:4}} >
                                    <Text style={{fontWeight:'800'}}>-</Text>
                                    <Text key={index} style={[styles.text, {marginRight:20}]}>{caution.trim()}</Text>
                                </View>
                            ))}
                        </>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBarSpacer: {
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, // Espaciado dinámico
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',  
        paddingTop: 30,
        paddingBottom: 75,
    },
    buttonBack:{
        backgroundColor: '#959595',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 10,
        position:'absolute',
        top: 10,
        left: 10,
    },
    layout:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subprincipalContainer:{
        paddingTop: 10,
        paddingHorizontal: 30,
    },
    lessonImage: {
        width: '100%',
        height: 150, 
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom:2
    },
    subtitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 17,
        marginVertical: 10,
    },
    text: {
        textAlign: 'left',
        fontSize: 14,
        lineHeight: 17,
    },
})