import { useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import {preguntas} from '../../components/data';
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";


export default function QuizCard(){
const router = useRouter();

    const {id} = useLocalSearchParams();
    const [index, setIndex] = useState(0);
    const [pregunta, setPregunta] = useState(preguntas[id-1][index]);
    const [puntaje, setPuntaje] = useState(0);
    const [respondido, setRespondido] = useState(false);

    useEffect(() => {
        setPregunta(preguntas[id-1][index]);
    }, [index]);
    
    const sgtePregunta = () =>{
        if(pregunta === preguntas[id-1][preguntas[id-1].length-1]){
            alert('Fin del cuestionario');
            router.push('/aprendizaje/questions');
            return;
        }
        setIndex(index+1);

    }

    return (
        <View>
            <Text>Quiz {id}</Text>
            <Text>Pregunta {pregunta.id}</Text>
            <Text>{pregunta.pregunta}</Text>
            <Text>{pregunta.respuesta}</Text>
            <Text>{pregunta.opciones[0]}</Text>
            <Text>{pregunta.opciones[1]}</Text>
            <Text>{pregunta.opciones[2]}</Text>
            <Text>{pregunta.opciones[3]}</Text>
            <TouchableOpacity style={{
                width:200,
                height:30,
                backgroundColor:'cyan',
            }}
            onPress={sgtePregunta}
            >
                <Text>
                    siguiente pregunta
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}