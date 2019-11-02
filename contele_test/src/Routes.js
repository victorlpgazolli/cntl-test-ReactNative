
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/Login'
import Main from './pages/Main'
import Cadastrar from './pages/Register'

const tabBarOptions = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      padding: 15,
      fontSize: 20,
    },
  }
export default createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: () => ({
              title: 'Login',
              headerLeft: null
            }),
        },
        Principal: {
            screen: Main,
            navigationOptions: () => ({
              title: 'Principal',
              headerLeft: null
            }),
        },
        CadastrarLogin: {
            screen: Cadastrar,
            navigationOptions: () => ({
              title: 'Criar Conta',
            }),
        },
    },
    {
      tabBarOptions:tabBarOptions,
    })
);