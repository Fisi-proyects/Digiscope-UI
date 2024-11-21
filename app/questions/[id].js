import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import {preguntas} from '../../data/data';
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

let array = [1,2,3,4,5,6,7,8,9,10];
array = array.sort(() => Math.random() - 0.5);
console.log(array);

export default function QuizCard() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [index, setIndex] = useState(0); // Índice de la pregunta actual
    const [pregunta, setPregunta] = useState(preguntas[id - 1][index]); // Pregunta actual
    const [puntaje, setPuntaje] = useState(0); // Puntaje acumulado
    const [respondido, setRespondido] = useState(false); // Si la pregunta fue respondida
    const [selected, setSelected] = useState(null); // Alternativa seleccionada
    const [sorted, setSorted] = useState([...pregunta.opciones].sort(() => Math.random() - 0.5)); // Opciones ordenadas aleatoriamente
    const [modalVisible, setModalVisible] = useState(false);

    // Efecto para actualizar la pregunta y sus opciones al cambiar el índice
    useEffect(() => {
        const nuevaPregunta = preguntas[id - 1][index];
        setPregunta(nuevaPregunta); // Actualiza la pregunta actual
        setSorted([...nuevaPregunta.opciones].sort(() => Math.random() - 0.5)); // Reordena las opciones de esta pregunta
        setSelected(null); // Reinicia la selección
        setRespondido(false); // Permite responder la nueva pregunta
    }, [index]);

    const handleSelect = (alternative) => {
        if (respondido) return; 

        setSelected(alternative); 
        setRespondido(true); 

        if (alternative === pregunta.respuesta) {
            setPuntaje(puntaje + 2); // Incrementa el puntaje si es correcto
        }
    };

    const sgtePregunta = () => {
        if (pregunta === preguntas[id - 1][preguntas[id - 1].length - 1]) {
            setModalVisible(true);
            //router.push('/aprendizaje/questions');
            return;
        }
        setIndex(index + 1); // Avanza al siguiente índice de pregunta
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <View style={styles.iconContainer}>
                    <Ionicons name="book-outline" size={41} color="#f65074" />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Title}>Pregunta {pregunta.id}</Text>
                    <Text style={styles.description}>{pregunta.pregunta}</Text>
                </View>
            </View>

            {sorted.map((alternative, i) => (
                <TouchableOpacity
                    key={i}
                    style={[
                        alternativeSt.container,
                        selected === alternative
                            ? alternative === pregunta.respuesta
                                ? { backgroundColor: "#79DA9B" } // Verde si es correcta
                                : { backgroundColor: "#E16171" } // Rojo si es incorrecta
                            : null,
                    ]}
                    onPress={() => handleSelect(alternative)}
                >
                    <Text style={[
                        alternativeSt.text,
                        selected === alternative ? { color: "white" } : null
                    ]}>
                        {alternative}
                    </Text>
                </TouchableOpacity>
            ))}

            <View style={styles.butonContainer}>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={sgtePregunta}
                >
                    <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalStyles.modalBackground}>
                    <View style={modalStyles.modalContainer}>
                        <Text style={modalStyles.modalText}>Obtuviste {puntaje} puntos</Text>
                        <TouchableOpacity
                            style={modalStyles.closeButton}
                            onPress={() => {
                                setModalVisible(false);
                                router.push('/aprendizaje/questions'); // Redirigir
                            }}
                        >
                            <Text style={modalStyles.buttonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    containerAlt: {
        padding: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        width: '100%',
    },
    nextButton:{
        backgroundColor: '#f65074',
        padding: 10,
        borderRadius: 5,
        width: 110,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
    },
    butonContainer:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        margin: 10,
        width: '90%',
    },
    iconContainer : {
        backgroundColor: '#fbe4e7',
        width:60,
        height:60,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    Title:{
        color:'#515050',
        fontSize: 19,
        fontWeight: '600',
    },
    description:{
        color:'#898989',
        fontSize: 13,
        fontWeight: '500',
    },
    TextContainer:{
        display:'flex',
        flexDirection: 'column',
        gap: 5,
        flexShrink: 1,
    },
    questionContainer:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        padding: 20,
        gap: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
})
const alternativeSt = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        width: '90%',
        height:70,
        justifyContent:'center',
        alignItems:'flex-start',
        
    },
    text:{
        color: '#898989',
        fontSize: 15,
    }
})

const modalStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    closeButton: {
        backgroundColor: "#f65074",
        padding: 10,
        borderRadius: 5,
        width: "50%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});