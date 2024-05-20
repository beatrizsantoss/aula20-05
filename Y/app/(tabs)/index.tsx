import React from 'react';
import { Text, View, StyleSheet, Platform, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Apertei o Botão!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá mundo, atualização de plataforma</Text>
      <Button title="Clique Aqui" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
  },
});
