import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SelectMode() {
    return (
        <View style ={styles.Container}>
            <View>
                <Text style={styles.title}>Seleccione una opcion de Ar</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Link href={'/cards'} asChild>
                    <TouchableOpacity style={styles.buttonfree}>
                        <Text style={styles.text}>Cartas</Text>
                    </TouchableOpacity>
                </Link>
                <Link href={'/free'} asChild>
                    <TouchableOpacity style={styles.buttonCard} >
                        <Text style={styles.text} >Modo libre</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        display: 'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'700',
        fontSize: 24,
    },
    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        gap: 10,
    },
    buttonfree:{
        backgroundColor:'#79DA9E',
        width: 200,
        height: 50,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontWeight: '600',
        fontSize: 20,
        color:'white'
    },
    buttonCard:{
        backgroundColor:'#79DA9E',
        width: 200,
        height: 50,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})