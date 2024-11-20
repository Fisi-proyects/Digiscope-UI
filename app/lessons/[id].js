import { Link, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, StyleSheet, TouchableOpacity, Platform, StatusBar, View, Image} from "react-native";
import { lessonsData } from "./LessonsData";

export default function DetailLesson(){

    const {id} = useLocalSearchParams();
    const lesson = lessonsData.find(lesson => lesson.id === parseInt(id)); 

    const isLessonOne = lesson.id === 1;

    return (
        <View style={styles.container}>
            <View style={styles.statusBarSpacer} />
            <ScrollView>
                <View style={styles.principalContainer}>
                    <Link href={'/'} >
                        <View style={styles.buttonBack}>
                            <Image source={require('../../assets/FlechaAtras.png')} />
                        </View>
                    </Link>
                    <Text style={styles.title}>
                        Lección N°{id}: {lesson.tool}
                    </Text>
                    <Image source={{ uri: lesson.image }} style={styles.lessonImage} resizeMode="contain"/>
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
                            <Text style={styles.text}>{lesson.description}</Text>
                            <Text style={styles.subtitle}>Características:</Text>
                            <Text style={styles.text}>{lesson.characteristics}</Text>
                            <Text style={styles.subtitle}>Instrucciones de Uso:</Text>
                            <Text style={styles.text}>{lesson.instruction}</Text>
                            <Text style={styles.subtitle}>Precauciones:</Text>
                            <Text style={styles.text}>{lesson.caution}</Text>
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
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 75,
    },
    buttonBack:{
        backgroundColor: '#959595',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    principalContainer:{
        width: '100%',
        paddingHorizontal: 25,
        gap: 10,
    },
    subprincipalContainer:{
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 30,
        gap: 10,
    },
    lessonImage: {
        width: '100%',
        height: 150, 
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'left',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17,
    },
    text: {
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: 13,
        lineHeight: 17,
    },
    button: {

    },
})