import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button ({title, onPress}){
    return(
        <TouchableOpacity style={estilo.button} onPress={onPress}>
            <Text style={estilo.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: '#6200EE',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
