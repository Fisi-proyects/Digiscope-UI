import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
    const [activeTab, setActiveTab] = useState('Cuestionarios');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Aprendizaje</Text>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Lecciones' && styles.activeTab]}
                    onPress={() => setActiveTab('Lecciones')}
                >
                    <Text style={[styles.tabText, activeTab === 'Lecciones' && styles.activeTabText]}>Lecciones</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Cuestionarios' && styles.activeTab]}
                    onPress={() => setActiveTab('Cuestionarios')}
                >
                    <Text style={[styles.tabText, activeTab === 'Cuestionarios' && styles.activeTabText]}>Cuestionarios</Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'Cuestionarios' ? <Quizzes /> : <Lessons />}

            <View style={styles.bottomBar}>
            </View>
        </View>
    );
}

const Quizzes = () => {
    const quizData = [
        { id: 1, title: 'Cuestionario 1', description: 'Descripción del cuestionario 1' },
        { id: 2, title: 'Cuestionario 2', description: 'Descripción del cuestionario 2' },
        { id: 3, title: 'Cuestionario 3', description: 'Descripción del cuestionario 3' },
        { id: 4, title: 'Cuestionario 4', description: 'Descripción del cuestionario 4' },
        { id: 5, title: 'Cuestionario 5', description: 'Descripción del cuestionario 5' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.contentWrapper}>
            <FeaturedCard onPress={() => alert('Cuestionario destacado')} />
            {quizData.map((quiz) => (
                <QuizCard 
                    key={quiz.id} 
                    title={quiz.title} 
                    description={quiz.description} 
                    onPress={() => alert(`Cuestionario ${quiz.id}`)} 
                />
            ))}
        </ScrollView>
    );
};

const Lessons = () => {
    return (
        <ScrollView contentContainerStyle={styles.contentWrapper}>
            <View style={styles.lessonContainer}>
                <Text style={styles.lessonText}>Contenido de la Lección 1</Text>
            </View>
            <View style={styles.lessonContainer}>
                <Text style={styles.lessonText}>Contenido de la Lección 2</Text>
            </View>
        </ScrollView>
    );
};

const FeaturedCard = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.featuredCard} onPress={onPress}>
            <View style={styles.featuredIcon} />
            <View style={styles.featuredTextContainer}>
                <Text style={styles.featuredTitle} numberOfLines={1}>Cuestionario Destacado</Text>
                <Text style={styles.featuredDescription} numberOfLines={2}>Este es un cuestionario especial que debes intentar.</Text>
            </View>
        </TouchableOpacity>
    );
};

const QuizCard = ({ title, description, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Ionicons name="document-text" size={36} color="#4CAF50" />
            </View>
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle} numberOfLines={1}>{title}</Text>
                <Text style={styles.cardDescription} numberOfLines={1}>{description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color="#333" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 50,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        padding: 6,
        marginBottom: 25,
        width: '90%',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#6200ee',
    },
    tabText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    activeTabText: {
        color: '#fff',
    },
    contentWrapper: {
        alignItems: 'center',
        paddingBottom: 100,
    },
    featuredCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e7dbfd',
        padding: 25,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: 380,
        height: 140,
    },
    featuredIcon: {
        width: 60,
        height: 30,
        backgroundColor: '#a07ce0',
        borderRadius: 10,
        marginRight: 20,
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
        fontSize: 18,
        color: '#666',
        marginTop: 6,
    },
    card: {
        flexDirection: 'row',
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
        height: 100,
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    lessonContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: 380,
        height: 100,
    },
    lessonText: {
        fontSize: 18,
        color: '#333',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        padding: 30,
        alignItems: 'center',
    },
});
