import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    const [text, setText] = useState('');
    const [persistedText, setPersistedText] = useState('Nenhum texto salvo');

    useEffect(() => {
        const loadPersistedText = async () => {
        const savedText = await AsyncStorage.getItem('savedText');
        if (savedText) setPersistedText(savedText);
        };
        loadPersistedText();
    }, []);

    const saveText = async () => {
        await AsyncStorage.setItem('savedText', text);
        setPersistedText(text);
    };

    const clearText = async () => {
        await AsyncStorage.removeItem('savedText');
        setPersistedText('Nenhum texto salvo');
        setText('');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Persistência e Navegação</Text>
        <TextInput style={styles.input} placeholder="Digite algo" value={text} onChangeText={setText} />
        <Text style={styles.redText}>Sem persistência: {text || 'Nenhum texto salvo'}</Text>
        <Text style={styles.greenText}>Texto persistido: {persistedText}</Text>
        <View style={styles.buttonContainer}>
            <Button title="Salvar" onPress={saveText} color="blue" />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Limpar" onPress={clearText} color="blue" />
    </View>
    <View style={styles.buttonContainer}>
            <Button 
            title="Detalhes" 
            onPress={() => navigation.navigate('Detalhes', { text, persistedText })}
            color="blue" 
            />
        </View>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    redText: {
        color: 'red',
        marginBottom: 10,
    },
    greenText: {
        color: 'green',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
        marginBottom: 10,
    },
});

export default Home;