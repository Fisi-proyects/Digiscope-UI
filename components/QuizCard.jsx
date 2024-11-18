import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function QuizCard ({onPress, title, description}){
    return (
        <TouchableOpacity style={styles.questioncard} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Ionicons name="document-text" size={36} color="#4CAF50" />
            </View>
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle} numberOfLines={1}>{title}</Text>
                <Text style={styles.cardDescription} numberOfLines={1}>{description}</Text>
            </View>
                <Ionicons name="chevron-forward" size={30} color="#333" />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    questioncard: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 25,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: 380,
        marginHorizontal:-8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#d4f6e2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    cardTextContainer: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: 'Inter',        
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 16.94,
        textAlign: 'left',
        textDecorationLine: 'bold',   
        textDecorationSkipInk: 'none',     
    },
    cardDescription: {
        fontFamily: 'Inter',        
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.52,
        textAlign: 'left',
        //textDecorationLine: 'underline',   
        textDecorationSkipInk: 'none',     
    },
})