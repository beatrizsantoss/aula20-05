import { Text, View, StyleSheet, Platform } from 'react-native';
import Button from '../../components/navigation/button'
 
export default function HomeScreen() {
  const Clicar = () => {
    alert("apertei no botão");
  }
  return (
    <View style={styles.containeir}>
      <Text style={styles.title}> Olá mundo, atualização de plataforma</Text>
      <Button title="Clique Aqui" onPress={Clicar}/>
    </View>
    );
}
 
const styles = StyleSheet.create({
  containeir: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
 
  title: {
fontSize: 30,
fontWeight: 'bold',
color: '#333',
padding: 20,
  }
 
});
 