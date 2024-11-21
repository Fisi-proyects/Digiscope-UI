import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, ScrollView, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function HelpC() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '' });

    const openModal = (title, description) => {
        setModalContent({ title, description });
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Ayuda</Text>

            <TouchableOpacity
                style={styles.card}
                onPress={() =>
                    openModal(
                        'Instrucciones de Uso',
                        `Esta aplicación utiliza realidad aumentada (RA) para ayudarte a aprender sobre instrumentos de laboratorio.
                        \n1. Para comenzar, asegúrate de tener una imagen del instrumento que quieres estudiar.
                        \n2. Acércate a la imagen del instrumento con la cámara de tu dispositivo.
                        \n3. Cuando la aplicación reconozca el instrumento, verás una visualización en RA con información adicional.
                        \n4. Puedes explorar las lecciones y cuestionarios asociados a cada instrumento para profundizar tus conocimientos.
                        \n\nPara mayor información sobre el uso de la RA, revisa los tutoriales en la página de soporte.`
                    )
                }
            >
                <View style={styles.cardContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Instrucciones de Uso</Text>
                        <Text style={styles.cardDescription}>
                            Aprende cómo utilizar la aplicación de RA en tu estudio de laboratorio.
                        </Text>
                    </View>
                    <Image
                        source={require('../assets/instructions.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() =>
                    openModal(
                        'Preguntas Frecuentes',
                        `1. ¿Cómo funciona la realidad aumentada en esta aplicación?
                        \nLa RA funciona escaneando una imagen del instrumento de laboratorio. Una vez que se reconoce, se muestra una visualización interactiva con información adicional.\n
                        \n2. ¿Qué hago si la aplicación no reconoce un instrumento?
                        \nAsegúrate de que la imagen esté bien iluminada y en buena calidad. Si el problema persiste, revisa si el instrumento está incluido en la lista de la aplicación.\n
                        \n3. ¿Puedo guardar mi progreso en los cuestionarios y lecciones?
                        \nSí, puedes guardar tu progreso y revisarlo en la sección de perfil para ver tus resultados y avances.\n
                        \nPara más detalles, consulta la página de preguntas frecuentes en el sitio web.`
                    )
                }
            >
                <View style={styles.cardContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Preguntas Frecuentes</Text>
                        <Text style={styles.cardDescription}>
                            Respuestas a las dudas comunes sobre el uso de la aplicación.
                        </Text>
                    </View>
                    <Image
                        source={require('../assets/questions.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() =>
                    openModal(
                        'Soporte Técnico',
                        `Para recibir soporte técnico personalizado, sigue estos pasos:\n
                        \n1. Visita nuestra página de soporte para encontrar guías sobre el uso de la realidad aumentada y la solución de problemas comunes.
                        \n2. Si tienes problemas para utilizar la RA o reconocer los instrumentos, contáctanos por correo electrónico o teléfono.
                        \n3. En caso de que el problema persista, tenemos un equipo de soporte disponible las 24 horas en nuestro chat en vivo.\n
                        \nNuestro equipo está aquí para ayudarte a tener una experiencia fluida y efectiva con la aplicación.`
                    )
                }
            >
                <View style={styles.cardContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Soporte Técnico</Text>
                        <Text style={styles.cardDescription}>
                            Asistencia técnica para resolver problemas con la app.
                        </Text>
                    </View>
                    <Image
                        source={require('../assets/support.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{modalContent.title}</Text>
                        <ScrollView contentContainerStyle={styles.scrollContent}>
                            <Text style={styles.modalDescription}>{modalContent.description}</Text>
                        </ScrollView>
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 50,
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 16,
        color: '#666',
    },
    icon: {
        width: 60,
        height: 60,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 20, 
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        maxHeight: screenHeight * 0.8, 
        width: '90%',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 10,
        paddingVertical: 15, 
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    modalDescription: {
        fontSize: 18,
        color: '#666',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});