import { ScrollView, StyleSheet } from "react-native";
import FeaturedCard from "./FeaturedCard";
import QuizCard from "./QuizCard";



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
                <QuizCard 
                    key={quiz.id} 
                    title={quiz.title} 
                    description={quiz.description} 
                    onPress={() => alert(`Cuestionario ${quiz.id}`)} 
                />
            ))}
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentWrapper:{
        alignItems: 'center',
        paddingBottom: 100,
    },
})