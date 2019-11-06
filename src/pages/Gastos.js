
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View, ScrollView, Text, Image, ToastAndroid, TouchableOpacity } from 'react-native'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import PTRView from 'react-native-pull-to-refresh';
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchInput, { createFilter } from 'react-native-search-filter'
import Expenses from '../assets/generate_gastos'
import { Footer, Header } from 'native-base';
const { width, height } = Dimensions.get('window')
const KEYS_TO_FILTERS = ['expenses.title', 'title'];
export default function Gastos({ navigation }) {
    const [exprense, setExprense] = useState([]);
    const [total, setTotal] = useState(0);
    const [term, updateiTerm] = useState('');
    useEffect(() => {
        setExprense(Expenses)
        let soma_total = 0;
        for (let i = 0; i < exprense.length; i++) {
            for (let j = 0; j < exprense[i].expenses.length; j++) {
                soma_total += parseFloat(exprense[i].expenses[j].price)
            }
        }
        setTotal(soma_total)
    }, [exprense]);
    function searchUpdated(term) {
        updateiTerm(term)
    }
    function refresh() {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(); }, 2000)
        });
    }
    searchTerms = navigation.getParam('search', false)
    const filteredExpenses = exprense.filter(createFilter(term, KEYS_TO_FILTERS))
    return (
        <View style={{ flex: 1 }}>
            <PTRView onRefresh={refresh} >
                <Header androidStatusBarColor="#9DADB8" style={{ display: 'none' }} />
                {
                    searchTerms ?
                        <SearchInput
                            onChangeText={(term) => { searchUpdated(term) }}
                            style={[styles.searchInput]}
                            placeholder="Pesquisar por nome"
                        /> : null
                }
                <ScrollView contentContainerStyle={[styles.container]} style={[styles.containerShadow]}>
                    {filteredExpenses.map(expense => {
                        return (
                            <View style={[{ width: width, marginBottom: 15 }]}>
                                <Text style={[styles.dateStyle, styles.bolder]}>{expense.date.substring(0, 2)} <Text style={[styles.dayStyle]}>{expense.day.toUpperCase()}</Text></Text>
                                {
                                    expense.expenses.map(expenseIndividual =>

                                        <TouchableOpacity
                                            style={[{ alignItems: "center" }]}
                                            onPress={() => { navigation.navigate('gastoIndividual', { expense: expenseIndividual, day: expense.date }); }} >

                                            <View style={[styles.ticket, styles.shadow, { flexDirection: 'row' }]}>

                                                <View style={[{ flex: 1, width: width / 2 }]}>

                                                    <Text style={[{ fontSize: 18, opacity: expenseIndividual.active ? 1 : 0.5, textDecorationLine: expenseIndividual.active ? '' : 'line-through' }, styles.isActive]}>
                                                        {expenseIndividual.title}
                                                    </Text>

                                                    <View style={[{ flexDirection: 'row' }]}>

                                                        <Icon_material name='silverware-fork-knife' style={[styles.icons, { marginRight: 7, opacity: expenseIndividual.active ? 1 : 0.5, }]} size={17} />

                                                        <Text style={[{ color: '#9DADB8', fontWeight: '900' }]}>
                                                            {expenseIndividual.category}
                                                        </Text>

                                                    </View>
                                                </View>
                                                <View style={[styles.price_refundable]}>

                                                    <View style={[{ flexDirection: 'row' }]}>
                                                        {
                                                            expenseIndividual.refundable ?
                                                                <Image
                                                                    style={[{ width: 24, height: 24, marginRight: 10, opacity: expenseIndividual.active ? 1 : 0.5 }]}
                                                                    source={require('../assets/refundable.png')}
                                                                    tintColor={expenseIndividual.active ? '#92DD59' : 'gray'}
                                                                /> : null
                                                        }

                                                        <Text style={[styles.bolder,
                                                        { fontSize: 18, opacity: expenseIndividual.active ? 1 : 0.5, textDecorationLine: expenseIndividual.active ? '' : 'line-through' }, styles.isActive]}>
                                                            {expenseIndividual.price}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>)
                                }
                            </View>
                        )
                    })}
                </ScrollView>
            </PTRView>
            <Footer style={[{ backgroundColor: '#DBE4F0', height: height * 0.2 }]}>

                <View style={[styles.floatCenter]}>

                    <Text style={[styles.total_text, styles.bolder]}>
                        TOTAL
                    </Text>

                </View>
                <View style={[styles.floatCenter, { alignItems: 'flex-end' }]}>
                    <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }]}>

                        <Text style={[{ fontSize: 20, marginRight: 5 }, styles.bolder, styles.darkerBlue]}>
                            R$
                        </Text>
                        <Text style={[{ fontSize: 37, }, styles.bolder, styles.darkerBlue]}>
                            {total.toFixed(2).replace('.', ',')}
                        </Text>
                    </View>

                </View>

            </Footer>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 15,
        backgroundColor: '#F5F8FB',
    },
    darkerBlue: {
        color: '#0E3A57',
    },
    total_text: {
        opacity: 0.9,
        color: '#9DADB8',
        paddingVertical: 10,
        fontSize: 20
    },
    price_refundable: {
        flex: 1,
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    isActive: {
        textDecorationStyle: 'solid',
        textDecorationColor: "#000"
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
        width: width
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
    icons: {
        color: '#9DADB8',
        marginRight: 7,
    },
    searchInput: {
        padding: 10,
        borderColor: '#CCCCCC00',
        borderBottomColor: '#CCCCCC90',
        borderWidth: 1,
        backgroundColor: '#F5F8FB'
    },
})