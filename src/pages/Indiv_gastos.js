
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, ToastAndroid, TouchableOpacity } from 'react-native'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons';
import { Footer, Header } from 'native-base';
const _width = Dimensions.get('window').width
const _height = Dimensions.get('window').height
var day = ''
export default function Gastos({ navigation }) {
  const [exprense, setExprense] = useState([]);
  useEffect(() => {
    day = `${navigation.state.params.day}/09/2019`
    setExprense(navigation.state.params.expense)
  }, []);

  return (

    <View style={[]}>
      <Header style={[{ backgroundColor: '#DBE4F0', height: _height * 0.12 }]} androidStatusBarColor='#9DADB8'>
        <View style={[{ width: _width }]}>
          <Text style={[{ textAlign: 'right', fontSize: 20, color: '#556474', marginHorizontal: 20 }, styles.bolder]}>R$ <Text style={[styles.bolder, { fontSize: 39 }]}>{exprense.price}</Text></Text>
        </View>
      </Header>
      <View style={[{ flexDirection: 'row' }]}>
        <View style={[]}>
          <Icon_FontAwesome name='calendar-o' style={{color: '#556474'}} size={24} />
          <Icon_material name='silverware-fork-knife' style={{color: '#556474'}} size={24} />
          <Text style={[styles.bolder],{color:'#556474'}}>{day}</Text>
        </View>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    backgroundColor: '#F5F8FB',
  },
  dateStyle: {
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 25,
    color: '#9DADB8'
  },
  dayStyle: {
    fontSize: 16,
    fontWeight: '300'
  },
  floatCenter: {
    flex: 1,
    margin: 20,
    alignSelf: 'flex-start'
  },
  ticket: {
    backgroundColor: '#fff',
    marginVertical: 2,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: _width
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  containerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bolder: {
    fontWeight: 'bold'
  },
})