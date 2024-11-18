import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailLesson(){

    const {id} = useLocalSearchParams();
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            }}>
            <Text>
                Detalle de la lección {id}
            </Text>
            <Link href={'/'} >
                Volver Atras
            </Link>
        </View>
    )
}