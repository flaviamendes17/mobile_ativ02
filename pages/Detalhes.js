import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Detalhes = ({ route, navigation }) => {
    const { text = 'Nenhum texto salvo', persistedText = 'Nenhum texto salvo' } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.redText}>Sem persistência: {text}</Text>
            <Text style={styles.greenText}>Persistência: {persistedText}</Text>
            <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    redText: {
        color: 'red',
        marginBottom: 10,
    },
    greenText: {
        color: 'green',
        marginBottom: 20,
    },
});

export default Detalhes;