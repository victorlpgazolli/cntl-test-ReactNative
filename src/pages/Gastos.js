
import React from 'react';
import { Dimensions, Platform, StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, ToastAndroid, TouchableOpacity } from 'react-native'
import Expenses from '../assets/generate_gastos'
import { Footer, Header } from 'native-base';
const _width = Dimensions.get('window').width
const _height = Dimensions.get('window').height
export default function Gastos({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header androidStatusBarColor="#9DADB8" style={{display:'none'}}/>
            <ScrollView contentContainerStyle={[styles.container]} style={[styles.containerShadow]}>
                {Expenses.map(expense => {
                    return (
                        <View style={[{ width: _width, marginBottom: 15 }]}>
                            <Text style={[styles.dateStyle, styles.bolder]}>{expense.date} <Text style={[styles.dayStyle]}>{expense.day.toUpperCase()}</Text></Text>
                            {
                                expense.expenses.map(indiv_expense =>
                                    <TouchableOpacity
                                        style={[{ alignItems: "center" }]}
                                        onPress={()=>{ navigation.navigate('Indiv_gastos', {expense: indiv_expense, day: expense.date});}} >
                                        <View style={[styles.ticket, styles.shadow, { flexDirection: 'row', }]}>
                                            <View style={[{ flex: 1, width: _width / 2 }]}>
                                                <Text style={[{ fontSize: 18 }]}>{indiv_expense.title}</Text>
                                                <View>
                                                    <Text style={[{ color: '#9DADB8', fontWeight: '900' }]}>{indiv_expense.category}</Text>
                                                </View>
                                            </View>
                                            <View style={[{ flex: 1, width: _width / 2, justifyContent: 'center', alignItems: 'flex-end', }]}>
                                                <View style={[{ flexDirection: 'row' }]}>
                                                    <Text style={[styles.bolder, { fontSize: 18, paddingHorizontal: 5 }]}>ic</Text>
                                                    <Text style={[styles.bolder, { fontSize: 18 }]}>{indiv_expense.price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>)
                            }
                        </View>
                    )
                })}
            </ScrollView>
            <Footer style={[{ backgroundColor: '#DBE4F0', height: _height * 0.2 }]}>
                <View style={[styles.floatCenter]}>
                    <Text style={[{ opacity: 0.8, color: '#9DADB8', paddingVertical: 2, fontSize: 18 }, styles.bolder]}>TOTAL</Text>
                </View>
                <View style={[styles.floatCenter]}>
                    <Text style={[{ textAlign: 'right', color: '#0E3A57' }, styles.bolder,]}>R$<Text style={[{ fontSize: 25, }]}> 490,00</Text></Text>
                </View>
            </Footer>
        </View>
    );
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
        fontSize: 26,
        color: '#9DADB8'
    },
    dayStyle: {
        fontSize: 13,
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