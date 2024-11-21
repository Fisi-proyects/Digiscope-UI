import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FeaturedCard ({onPress}){
    return(
        <TouchableOpacity style={styles.featuredCard} onPress={onPress}>
            <View style={styles.featuredIcon} ></View>
            <View style={styles.featuredTextContainer} >
                <Text style={styles.featuredTitle} numberOfLines={1}>Cuestionario Wasasiano</Text>
                <Text style={styles.featuredDescription} numberOfLines={2}>Este es un cuestionario especial para especiales.</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    featuredIcon: {
        width: 60,
        height: 30,
        backgroundColor: '#a07ce0',
        borderRadius: 10,
        marginRight: 20,
    },
    featuredCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e7dbfd',
        padding: 25,
        borderRadius: 15,
        marginBottom: 15,
        width: "100%",
        height: 140,
    },
    featuredTextContainer: {
        flex: 1,
    },
    featuredTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    featuredDescription: {
        fontSize: 16,
        color: '#666',
        marginTop: 6,
    },
})