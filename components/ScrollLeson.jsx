import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import FeaturedCard from "./FeaturedCard";
import QuizCard from "./QuizCard";
import { useState } from "react";
import { Link } from "expo-router";
import { lessonsData } from "../app/lessons/LessonsData";

export default function ScrollLesson (){
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLessons = lessonsData.filter(lesson =>
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ScrollView contentContainerStyle={styles.ContentWrapper} >
            <TextInput
                style={styles.searchInput}
                placeholder="Filtrar lecciones"
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
            />
            
            {filteredLessons.map((lesson) => (

                <Link key={lesson.id} href={`/lessons/${lesson.id}`} asChild>
                    <TouchableOpacity style={{width:'100%'}}>
                        <View style={styles.lessoncard}>
                            <Image source={{ uri: lesson.image }} style={styles.lessonImage} />
                            <View style={styles.lesonTextContainer}>
                                <Text style={styles.cardTitle}>{lesson.title}</Text>
                                <Text style={styles.cardDescription}>{lesson.tool}</Text>
                            </View>
                            <View style={{
                                backgroundColor:'white',
                                position:'absolute',
                                right:0,
                                bottom:0,
                                width:40,
                                height:40,
                                borderRadius:50,
                                aspectRatio:1,
                                marginBottom:'20%',
                                marginRight:'5%',
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                                <Ionicons name='arrow-forward-outline' size={30} color='#515050' />
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ContentWrapper: {
        alignItems: 'center',
        paddingBottom: 100,
        width: 320,
        margin:20,
        gap: 20,
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        width: '100%',
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    lessoncard: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    lessonImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    lesonTextContainer:{
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:20,
        display:'flex',
        justifyContent:'flex-start',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 16.94,
        textAlign: 'left',
        textDecorationLine: 'bold',   
        textDecorationSkipInk: 'none',     
    },
    cardDescription: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.52,
        textAlign: 'left',
        //textDecorationLine: 'underline',   
        textDecorationSkipInk: 'none',     
    },
});