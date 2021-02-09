import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Body, Text, Button, Form, Item, Input, Label, ListItem, Radio, Right, Left, View } from 'native-base';
import {  StyleSheet, Image } from 'react-native';


export default class Calculadora extends Component {

constructor(props) {
  super(props);
this.state = {
  num1: null,
  num2: null,
  total: null,
  operacao: 'itemSoma',
};
}

calcular = () => {
  this.setState({total: parseFloat(this.state.num1)+ parseFloat(this.state.num2)+ "Cal"});
  console.log(this.state.num1);

 
}



  render() {
 
    return (
      <Container scrollEnabled={true}>
        <Content style={styles.container}>
        <Form>
        
            <Item floatingLabel>
              <Label>Digite as calorias do primeiro produto:</Label>
             
              <Input name= "num1" onChangeText={(text) => this.setState({num1:text})}/>
              
            </Item>
            <Item floatingLabel last>
              <Label>Digite as calorias do segundo produto:</Label>
              <Input name= "num2" onChangeText={(text) => this.setState({num2:text})}/>
            </Item>
           
            
           <Card style={styles.texto}>
            <CardItem >
             
                 <Text>Sua refeição vai ter {this.state.total}</Text>
            
              
            </CardItem>
          </Card>
         
           
           
                  
                
            <Button full onPress={() => this.calcular()} style={styles.botao}>
            <Text>Somar</Text>
            </Button>
          </Form>
          <Image style={styles.foto}
  source={{ uri:'https://i.pinimg.com/originals/48/d9/5d/48d95dbde2d7f829d4cd6c0df5b10546.png' }}
/>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

botao: {
      
      backgroundColor: '#ae0b50',
      marginTop: 10,
      
     
  },
  container: {
    alignContent: 'center',
   
   
    padding: 24,
    backgroundColor:'#ff509b',
    
  },
  texto: {
    marginTop: 30,


  },
     foto: {
      width:200,
      height:200,
     alignSelf: 'center',
    }
 
});