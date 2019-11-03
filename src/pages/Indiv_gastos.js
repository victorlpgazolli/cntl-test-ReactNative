
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons';
import { Footer, Header } from 'native-base';
const _width = Dimensions.get('window').width
const _height = Dimensions.get('window').height
var day = ''
export default function Gastos({ navigation }) {
  const [exprense, setExprense] = useState([]);
  useEffect(() => {
    day = `${navigation.state.params.day}/09/2019 - 13h50`
    setExprense(navigation.state.params.expense)
  }, []);

  return (

    <View>
      <Header style={[{ backgroundColor: '#DBE4F0', height: _height * 0.12 }]} androidStatusBarColor='#9DADB8'>

        <View style={[{ width: _width, flexDirection: 'row', marginRight: 30, justifyContent: 'flex-end' }]}>

          <Text style={[styles.bolder, { fontSize: 20, paddingTop: 10, color: '#556474' }]}>
            R$
          </Text>

          <Text style={[styles.bolder, { fontSize: 42, color: '#556474' }]}>
            {exprense.price}
          </Text>

        </View>

      </Header>

      <ScrollView contentContainerStyle={[styles.container]} >

        <View style={[{ flexDirection: 'row', marginBottom: 30 }]}>

          <Icon_FontAwesome name='calendar-o' style={[styles.icons]} size={24} />

          <Text style={[styles.bolder, { fontSize: 18, color: '#556474' }]}>
            {day.substring(0, 10)}
          </Text>

        </View>

        <View style={[styles.info]}>

          <Text style={[styles.bolder], { fontSize: 22 }}>
            {exprense.title}
          </Text>

          <View style={[{ flexDirection: 'row', marginTop: 4 }]}>

            <Icon_material name='silverware-fork-knife' style={[styles.icons]} size={20} />

            <Text style={[{ fontSize: 15, color: '#556474' }]}>
              {exprense.category}
            </Text>

          </View>

        </View>

        {
          exprense.refundable ? <View style={[styles.info]}>

            <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>

              <Image
                style={[{ width: 24, height: 24, marginRight: 10 }]}
                source={require('../assets/refundable.png')}
              />

              <Text style={[styles.bolder, { fontSize: 22, color: '#92DD59' }]}>
                Reembolsável</Text>

            </View>

          </View>
            : null
        }

        <View style={[styles.info]}>

          <View style={[styles.ticket, { flexDirection: 'row', alignItems: 'center' }]}>


            <Icon_FontAwesome name='calendar-check-o' style={[styles.icons, { paddingHorizontal: 7 }]} size={24} />

            <View style={[]}>

              <Text style={[styles.bolder, { fontSize: 18, color: '#0E3A57' }]}>
                {exprense.place}
              </Text>

              <Text style={[{ fontSize: 12, color: '#556474' }]}>
                {day}
              </Text>

            </View>

          </View>

        </View>

        <View style={[styles.info]}>

          <Image
            style={styles.images}
            source={exprense.image}
            resizeMode='cover'
          />

        </View>

      </ScrollView>

    </View>

  )

};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#F5F8FB',
    height: _height,
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
  icons: {
    color: '#556474',
    marginRight: 7,
    opacity: 0.5,
  },
  ticket: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#55647450',
    borderRadius: 10,
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
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 30
  },
  images: {
    height: 150,
    width: _width - 50,
    borderRadius: 10
  },
})