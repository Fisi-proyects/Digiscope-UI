import { Slot } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import Navigate from "../components/Navigate";

export default function Layout(){
    return (
        <>
            <View style={styles.container}>
                <Slot />
            </View>
            <Navigate />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})