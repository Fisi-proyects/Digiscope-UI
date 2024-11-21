import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import FeaturedCard from "./FeaturedCard";
import QuizCard from "./QuizCard";
import { Link } from "expo-router";
import Ionicons from 'react-native-vector-icons/Ionicons';



const quizData = [
    { id: 1, title: 'Cuestionario 1', description: 'Descripción del cuestionario 1' },
    { id: 2, title: 'Cuestionario 2', description: 'Descripción del cuestionario 2' },
    { id: 3, title: 'Cuestionario 3', description: 'Descripción del cuestionario 3' },
    { id: 4, title: 'Cuestionario 4', description: 'Descripción del cuestionario 4' },
    { id: 5, title: 'Cuestionario 5', description: 'Descripción del cuestionario 5' },
];

export default function ScrollQuestions (){
    return (
        <ScrollView contentContainerStyle={styles.contentWrapper}>
            <FeaturedCard onPress={() => alert('Cuestionario destacado')} />
            {quizData.map((quiz) => (
                <Link key={quiz.id} href={`/quizzes/${quiz.id}`} asChild>

                    <TouchableOpacity style={styleQ.questioncard}>
                        <View style={styleQ.iconContainer} >
                            <Ionicons name="document-text" size={36} color="#79DA9B" />
                        </View>
                        <View style={styleQ.cardTextContainer}>
                            <Text style={styleQ.cardTitle} >{quiz.title}</Text>
                            <Text style={styleQ.cardDescription} >{quiz.description}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={30} color="#515050" />
                    </TouchableOpacity>

                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentWrapper:{
        alignItems: 'center',
        paddingBottom: 100,
        width: 340,
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
        width: "100%",
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
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.52,
        textAlign: 'left',
        //textDecorationLine: 'underline',   
        textDecorationSkipInk: 'none',     
        color:"#898989"
    },
})