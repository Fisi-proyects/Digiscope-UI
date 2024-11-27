import { useState, useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Slot, usePathname, useRouter } from "expo-router";
export default function APLayout(){

    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (pathname.includes('questions')) {
            setActiveTab('Cuestionarios');
        } else if (pathname.includes('lessons')) {
            setActiveTab('Lecciones');
        }
    }, [pathname]);


    useEffect(() => {
        if (activeTab === 'Cuestionarios') {
            router.push('/aprendizaje/questions');
        } else if(activeTab === 'Lecciones') {
            router.push('/aprendizaje/lessons');
        }
    }, [activeTab]);

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
            <Slot />
            <View style={styles.bottomBar}>
            </View>
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
});