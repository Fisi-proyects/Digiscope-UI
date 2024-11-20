import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {preguntas} from '../../components/data';
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

let array = [1,2,3,4,5,6,7,8,9,10];
array = array.sort(() => Math.random() - 0.5);
console.log(array);

export default function QuizCard(){
const router = useRouter();

    const {id} = useLocalSearchParams();
    const [index, setIndex] = useState(0);
    const [pregunta, setPregunta] = useState(preguntas[id-1][index]);
    const [puntaje, setPuntaje] = useState(0);
    const [respondido, setRespondido] = useState(false);
    const [selected, setSelected] = useState(null);
    const [sorted, setSorted] = useState(pregunta.opciones.sort(() => Math.random() - 0.5));


    console.log(pregunta.opciones)

    useEffect(() => {
        setPregunta(preguntas[id-1][index]);
        setSorted( pregunta.opciones.sort(() => Math.random() - 0.5));
    }, [index]);
    
    const sgtePregunta = () =>{
        if(pregunta === preguntas[id-1][preguntas[id-1].length-1]){
            alert(`Fin del cuestionario \n puntaje ${puntaje}`);
            router.push('/aprendizaje/questions');
            return;
        }
        setPuntaje(puntaje + 10);
        setIndex(index+1);

    }

    return (
        <View style={styles.container} >


            <View style={styles.questionContainer} >
                <View style={styles.iconContainer} >
                    <Ionicons name="book-outline" size={41} color="#f65074" />
                </View>
                <View style={styles.TextContainer} >
                    <Text style={styles.Title}>Pregunta {pregunta.id}</Text>
                    <Text style={styles.description}>{pregunta.pregunta}</Text>
                </View>
            </View>
           
           {sorted.map((alternative)=>(

            <View style={alternativeSt.container}>
                <Text style={alternativeSt.text}  >{alternative}</Text>
            </View>
           ))}

            <View style={styles.butonContainer}>
                <TouchableOpacity style={styles.nextButton}
                onPress={sgtePregunta}
                >
                    <Text style={styles.buttonText}>
                        Siguiente
                    </Text>
                </TouchableOpacity>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
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