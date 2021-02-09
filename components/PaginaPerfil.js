import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Form, Item, Input, Label } from 'native-base';
import {  StyleSheet, View, Image, Picker } from 'react-native';


export default class PaginaPerfil extends Component {
    state = {  
           choosenIndex: 0,
           languague:"indefinido"
    };  
  constructor(props){
    super(props);
    this.state = {
      num1:null,
      num2:null,
      num3:null
    }
  }
    render() {
       const { route } = this.props;
        return (
            <Container style={styles.organizador}>
                <Content>
                <Form>
            <Item>
            <Text>Nome:</Text>
              <Input name ="num1" onChangeText = {(text) => this.setState({num1:text})} />
            </Item>
            <Item>
            <Text>Telefone:</Text>
              <Input name ="num2" onChangeText = {(text) => this.setState({num2:text})} />
            </Item>
            <Item>
            <Text>Endereço:</Text>
              <Input name ="num3" onChangeText = {(text) => this.setState({num3:text})} />
            </Item>
            <Text>Sexo:</Text>

                                                    <Picker style={styles.Picker}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Não Definido" value="não definido" />  
                    <Picker.Item label="Feminino " value="Feminino" />  
                    <Picker.Item label="Masculino" value="Masculino" />  
                </Picker> 
             <Button style={styles.botao}
             full success
               onPress={() => alert('Salvo!')}>
                  <Text>Salvar</Text> 
            </Button>
          </Form>
          <Text>           </Text>
          <Image style={styles.foto}
  source={{ uri:'https://i.pinimg.com/originals/a8/68/75/a86875861e71223d4b9f939578194430.png' }}
/>
          </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
  organizador: {
    marginTop:20,
    backgroundColor: '#ff509b',
    padding:12,
      },
      botao: {
     backgroundColor: '#ae0b50',
    },
    foto: {
      width:200,
      height:200,
     alignSelf: 'center',
    }
});