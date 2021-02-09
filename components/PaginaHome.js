import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';

const image = { uri: 'https://i.ibb.co/8KNN21h/tela-inicial.png' };
export default function PaginaHome ({ navigation }) {
  return(
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text} />
      <Button
        title="Menu"
        color="#ff509b"
        onPress={() => navigation.navigate('Menu')}
      />
      <Text>             </Text>
      <Button
        title="Perfil"
        color="#ae0b50"
        onPress={() => navigation.navigate('Perfil')}
      />
      <Text>             </Text>
      <Button
        title="Calculadora de calorias"
        color="#ff509b"
        onPress={() => navigation.navigate('Calculadora')}
      />
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold'
  },
});