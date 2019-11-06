
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Gastos from './pages/gastos'
import HeaderButton from './components/headerButton'
import gastoIndividual from './pages/gastoIndividual'
const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: '#F5F8FB',
    padding: 15,
    fontSize: 20,
  },
}
export default createAppContainer(
  createStackNavigator({
    Gastos: {
      screen: Gastos,
      navigationOptions: ({ navigation }) => ({
        title: 'Setembro',
        headerStyle: {
          backgroundColor: '#F5F8FB',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#556474',
        headerTitleStyle: {
          fontSize: 29,
          fontWeight: 'bold',
        },
        headerRight: (
          <HeaderButton screenProps={{ icon: 'search' }} />
        ),
      }),
    },
    gastoIndividual: {
      screen: gastoIndividual,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#DBE4F0',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#556474',
        headerRight: (
          <HeaderButton screenProps={{ icon: 'pen' }} />
        ),
      }),
    },
  },
    {
      tabBarOptions: tabBarOptions,
    })
);