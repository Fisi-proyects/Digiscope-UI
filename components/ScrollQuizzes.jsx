import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import FeaturedCard from "./FeaturedCard";
import React, { forwardRef, useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const questionData = [
    {id: 1, title: 'Cuestionario 1', description: 'Placa de Petri' },
    {id: 2, title: 'Cuestionario 2', description: 'Tubos de ensayo' },
    {id: 3, title: 'Cuestionario 3', description: 'Microscopio' },
    {id: 4, title: 'Cuestionario 4', description: 'Balaza Digital' },
    {id: 5, title: 'Cuestionario 5', description: 'Termometro Digital' },
    {id: 6, title: 'Cuestionario 6', description: 'Matraz' },
    {id: 7, title: 'Cuestionario 7', description: 'Soporte Universal' },
    {id: 8, title: 'Cuestionario 8', description: 'Probeta Graduada' },
    {id: 9, title: 'Cuestionario 9', description: 'Mechero de Bunsen' },
    {id: 10, title: 'Cuestionario 10', description: 'Maquina de prueba de jarras' },
    {id: 11, title: 'Cuestionario 11', description: 'Pipeta' },
];


export default function ScrollQuizzes (){
    const [searchTerm, setSearchTerm] = useState('');

    const filteredQuestions = questionData.filter(lesson =>
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase())||lesson.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ScrollView contentContainerStyle={styles.contentWrapper}>
            <TextInput
                style={styleQ.searchInput}
                placeholder="Filtrar Cuestionarios"
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
            />
            
            {filteredQuestions.map((question) => (
                <Link key={question.id} href={`/questions/${question.id}`} asChild>

                    <TouchableOpacity style={styleQ.questioncard}>
                        <View style={styleQ.iconContainer} >
                            <Ionicons name="document-text" size={36} color="#79DA9B" />
                        </View>
                        <View style={styleQ.cardTextContainer}>
                            <Text style={styleQ.cardTitle} >{question.title}</Text>
                            <Text style={styleQ.cardDescription} >{question.description}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={30} color="#515050" />
                    </TouchableOpacity>

                </Link>
            ))}
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentWrapper: {
        alignItems: 'center',
        paddingBottom: 100,
        width: '100%',
        margin: 20,
        gap: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 15,
        elevation: 2,
        width: 380,
        
        borderColor: '#ddd',
        borderWidth: 1,
    },
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#d4f6e2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    cardTextContainer: {
        flex: 1,
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
        textDecorationSkipInk: 'none',
    },
});

const styleQ = StyleSheet.create({
    questioncard: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 25,
        elevation: 1,
        width: "90%",
        borderColor: '#ddd',
        borderWidth: 1,
    },
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#d4f6e2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    cardTextContainer: {
        flex: 1,
    },
    cardTitle: {
    
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 16.94,
        textAlign: 'left',
        textDecorationLine: 'bold',   
        textDecorationSkipInk: 'none', 
        color: "#515050"    
    },
    cardDescription: {    
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 14.52,
        textAlign: 'left',
        //textDecorationLine: 'underline',   
        textDecorationSkipInk: 'none',     
        color:"#898989"
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        width: 320,
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
})