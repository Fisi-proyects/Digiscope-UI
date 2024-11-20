import { Text, View, StyleSheet } from "react-native";

export default function QuestionsC(){
    const question = "¿Cuál es la función de una placa de Petri?";
    const options = [
        "Cultivar microorganismos",
        "Medir líquidos",
        "Observar células",
        "Transportar sustancias",
    ];
    return (
        <View style = {styles.container}>
            <Text>Nombre del tema</Text>
            <Text style = {styles.question}>{question}</Text>
            
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 40,
        width: '100%',
        backgroundColor: '#f8f8f8'
    },

    question: {
        width: '90%',
        height: 70,
        backgroundColor: 'white',
    }
})




