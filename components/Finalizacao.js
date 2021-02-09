import React, { Component } from 'react';
import { Container, Header,  Content, Card, CardItem, Text,  Item, Icon, Input, Label, Form, Button, Scrollview } from 'native-base';
import {  StyleSheet, View, ImageBackground } from 'react-native';

const image = { uri: 'https://i.ya-webdesign.com/images/water-color-splatter-png-5.png' };

export default class Finalizacao extends Component {
  constructor(props){
    super(props);
    this.state = {
      num1:null,
      num2:null,
      num3:null,
      num4:null,
      num5:null
    }
  }
    render() {
      const{route} = this.props;
      const{ v,yes,l,sim} = route.params;
      const {navigation} = this.props;
          return (
       <Container style={styles.organizador}>
   <ImageBackground source={image} style={styles.image}>
        <Content>       
         <Card>
            <CardItem header style={styles.card}>
              <Text>
              {v ? 'Prato feito - R$20,00' : ''}   
              {yes ? '\nCoca-Cola - R$7,00' : ''}
              {l ? '\nHamburguer - R$25,00' : ''} 
              {sim ? '\nPorção de Batata - R$35,00' : ''}
                   </Text>
            </CardItem >
         </Card>
        <Form>
            <Item>
            <Text>Endereço de entrega:</Text>
              <Input name ="num1" onChangeText = {(text) => this.setState({num1:text})} />
            </Item>
            <Item>
            <Text>Número do cartão:</Text>
              <Input name ="num2" onChangeText = {(text) => this.setState({num2:text})} />
            </Item>
            <Item>
            <Text>Validade:</Text>
              <Input name ="num3" onChangeText = {(text) => this.setState({num3:text})} />
            </Item>
            <Item>
            <Text>Nome do Titular:</Text>
              <Input name ="num4" onChangeText = {(text) => this.setState({num4:text})} />
            </Item>
            <Item>
            <Text>Codigo de segurança:</Text>
              <Input name ="num5" onChangeText = {(text) => this.setState({num5:text})} />
            </Item>
            <Text>{this.state.num1}</Text>
            <Text>{this.state.num2}</Text>
            <Text>{this.state.num3}</Text>
             <Text>{this.state.num4}</Text>
             <Text>{this.state.num5}</Text>
          </Form>
          
          <Button style={styles.botao}
        onPress={() => navigation.navigate('Home')}>
        <Text>Finalizar compra</Text>
      </Button>
 </Content>
 </ImageBackground>
      </Container>
        );
    }
}

const styles = StyleSheet.create({
  organizador: {
    backgroundColor: '#ff509b',
      },
image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    textBold: true,
  },
  botao:{
    backgroundColor:'#ae0b50',
    justifyContent: 'center',
  },
});