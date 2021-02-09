import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Calculadora from './components/Calculadora';
import PaginaHome from './components/PaginaHome';
import PaginaMenu from './components/PaginaMenu';
import Finalizacao from './components/Finalizacao';
import PaginaPerfil from './components/PaginaPerfil'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      });
      this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const Stack = createStackNavigator();

    return (
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Página IniciaL">
            <Stack.Screen name="Home" component={PaginaHome} />
            <Stack.Screen name="Calculadora" component={Calculadora} />
            <Stack.Screen name="Menu" component={PaginaMenu} />
            <Stack.Screen name="Finalização" component={Finalizacao} />
            <Stack.Screen name="Perfil" component={PaginaPerfil} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    );
  }
}