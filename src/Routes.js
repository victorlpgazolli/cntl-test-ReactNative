
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Gastos from './pages/Gastos'
import Indiv_gastos from './pages/Indiv_gastos'
const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: '#F5F8FB',
    padding: 15,
    fontSize: 20,
  },
}
var searchVisible = false, editVisible = false;
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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { searchVisible = !searchVisible; navigation.setParams({ search: searchVisible }) }}>
              <Icon name='search' style={{ color: '#556474' }} size={24} />
            </TouchableOpacity>
          </View>
        ),
      }),
    },
    Indiv_gastos: {
      screen: Indiv_gastos,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#DBE4F0',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#556474',
        // headerTitleStyle: {
        //   fontSize: 29,
        //   fontWeight: 'bold',
        // },
        headerRight: (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { editVisible = !editVisible; navigation.setParams({ edit: editVisible }) }}>
              <Icon name='pen' style={{ color: '#556474' }} size={24} />
            </TouchableOpacity>
          </View>
        ),
      }),
    },
  },
    {
      tabBarOptions: tabBarOptions,
    })
);