import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { lessonsData } from "./LessonsData";

export default function DetailLesson(){

    const {id} = useLocalSearchParams();
    const lesson = lessonsData.find(lesson => lesson.id === parseInt(id)); 
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            }}>
            <Text>
                {lesson.tool}
            </Text>
            <Link href={'/'} >
                Volver Atras
            </Link>
        </View>
    )
}