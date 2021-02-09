import React, { useState } from 'react';
import {
  CheckBox,Text, StyleSheet,View,Button,ScrollView, ImageBackground, Input
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';

const image = { uri: 'https://www.onlygfx.com/wp-content/uploads/2017/11/watercolor-brush-texture-8.png' };
export default function Menu({ navigation }) {
  const [v, t] = useState(false);
  const [yes, no] = useState(false);
  const [l, b] = useState(false);
  const [sim, nao] = useState(false);
 
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#ff509b' }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Card>
              <Text>VEGETARIANO</Text>
              <CheckBox value={v} onValueChange={t} style={styles.checkbox} />
              <Text style={styles.label}>
                Prato feito - R$20,00 Serve 1 pessoa: Arroz, bife, batata frita,
                salada
              </Text>
              <CheckBox
                value={yes}
                onValueChange={no}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Coca-Cola - 500 ml - R$7,00</Text>
            </Card>
            <Card>
              <Text>DISK HAMBURGUER</Text>
              <CheckBox value={l} onValueChange={b} style={styles.checkbox} />
              <Text style={styles.label}>
                Hamburguer Tradicional - R$25,00 - Pão, Bacon, Alface, Ovo,
                Tomate
              </Text>
              <CheckBox
                value={sim}
                onValueChange={nao}
                style={styles.checkbox}
              />
              <Text style={styles.label}>
                Porção de batata frita - R$35,00 - 500 gramas{' '}
              </Text>
            </Card>
          </View>

          <Text>Pratos selecionados:</Text>
          <Text> {v ? 'Prato feito' : ''} </Text>
          <Text> {yes ? 'Coca-Cola' : ''} </Text>
          <Text> {l ? 'Hamburguer' : ''} </Text>
          <Text> {sim ? 'Porção de Batata' : ''} </Text>
          <Text> </Text>
          <Button
            title="Comprar"
            color="#ae0b50"
            onPress={() =>
              navigation.navigate('Finalização', {
                v,
                yes,
                l,
                sim,
              })
            }
          />
          
        </View>
        
        </ImageBackground>
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  image: {
    
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
