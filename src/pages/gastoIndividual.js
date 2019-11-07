
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons';
import customStyles from '../assets/styles';
import { Footer, Header } from 'native-base';
const { width, height } = Dimensions.get('window')
var date = '';
export default function Gastos({ navigation }) {
  const [exprense, setExprense] = useState([]);
  useEffect(() => {
    const { day: _date } = navigation.state.params
    date = _date
    setExprense(navigation.state.params.expense)
  }, []);

  return (

    <View>
      <Header style={[{ backgroundColor: customStyles.lightGray, height: height * 0.12 }]} androidStatusBarColor={customStyles.darkGray}>

        <View style={[{ width: width, flexDirection: 'row', marginRight: 30, justifyContent: 'flex-end' }]}>

          <Text style={[customStyles.bolder, { fontSize: 20, paddingTop: 10, color: customStyles.darkGrayText }]}>
            R$
          </Text>

          <Text style={[customStyles.bolder, { fontSize: 42, color: customStyles.darkGrayText }]}>
            {exprense.price}
          </Text>

        </View>

      </Header>

      <ScrollView contentContainerStyle={[styles.container]} >

        <View style={[{ flexDirection: 'row', marginBottom: 30 }]}>

          <Icon_FontAwesome name='calendar-o' style={[styles.icons]} size={24} />

          <Text style={[customStyles.bolder, { fontSize: 18, color: customStyles.darkGrayText }]}>
            {date.substring(0, 10)}
          </Text>

        </View>

        <View style={[styles.info]}>

          <Text style={[customStyles.bolder], { fontSize: 22 }}>
            {exprense.title}
          </Text>

          <View style={[{ flexDirection: 'row', marginTop: 4 }]}>

            <Icon_material name='silverware-fork-knife' style={[styles.icons]} size={20} />

            <Text style={[{ fontSize: 15, color: customStyles.darkGrayText }]}>
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

              <Text style={[customStyles.bolder, { fontSize: 22, color: '#92DD59' }]}>
                Reembolsável</Text>

            </View>

          </View>
            : null
        }

        <View style={[styles.info]}>

          <View style={[styles.ticket, { flexDirection: 'row', alignItems: 'center' }]}>


            <Icon_FontAwesome name='calendar-check-o' style={[styles.icons, { paddingHorizontal: 7 }]} size={24} />

            <View style={[]}>

              <Text style={[customStyles.bolder, { fontSize: 18, color: customStyles.darkBlue }]}>
                {exprense.place}
              </Text>

              <Text style={[{ fontSize: 12, color: customStyles.darkGrayText }]}>
                {date} - {exprense.hour}
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
    backgroundColor: customStyles.gray,
    height: height,
  },
  icons: {
    color: customStyles.darkGrayText,
    marginRight: 7,
    opacity: 0.5,
  },
  ticket: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: `${customStyles.darkBlue}50`,
    borderRadius: 10,
  },
  info: {
    marginBottom: 30
  },
  images: {
    height: 150,
    width: width - 50,
    borderRadius: 10
  },
})