
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchInput, { createFilter } from 'react-native-search-filter'
import customStyles from '../assets/styles';
import Expenses from '../assets/gastosGenerate'
import { Footer, Header } from 'native-base';
const { width, height } = Dimensions.get('window')
const keysToFilter = ['expenses.title', 'title'];
export default function Gastos({ navigation }) {
    const [exprense, setExprense] = useState([]);
    const [total, setTotal] = useState(0);
    const [load, setLoad] = useState({ refreshing: false });
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
    function handleRefresh() {
        //simulate refresh
        setTimeout(() => {
            setLoad({ refreshing: false })
        }, 1500);
        setLoad({ refreshing: true })
    }
    searchTerms = navigation.getParam('search', false)
    const filteredExpenses = exprense.filter(createFilter(term, keysToFilter))
    return (
        <View style={{ flex: 1 }}>
            {/* <PTRView onRefresh={refresh} > */}
            <Header androidStatusBarColor="#9DADB8" style={{ display: 'none' }} />
            {
                searchTerms ?
                    <SearchInput
                        onChangeText={(term) => { searchUpdated(term) }}
                        style={[styles.searchInput]}
                        placeholder="Pesquisar por nome"
                    /> : null
            }

            <FlatList
                style={[{ marginTop: 20 }]}
                data={filteredExpenses}
                refreshing={load.refreshing}
                onRefresh={() => { handleRefresh() }}
                renderItem={({ item }) => (
                    <View style={[{ width: width, marginBottom: 15 }]}>
                        <Text style={[customStyles.dateStyle, customStyles.bolder]}>{item.date.substring(0, 2)} <Text style={[customStyles.dayStyle]}>{item.day.toUpperCase()}</Text></Text>
                        {
                            item.expenses.map(expenseIndividual =>

                                <TouchableOpacity
                                    style={[{ alignItems: "center" }]}
                                    onPress={() => { navigation.navigate('gastoIndividual', { expense: expenseIndividual, day: item.date }); }} >

                                    <View style={[styles.ticket, customStyles.shadow, { flexDirection: 'row' }]}>

                                        <View style={[{ flex: 1, width: width / 2 }]}>

                                            <Text style={[{ fontSize: 18, opacity: expenseIndividual.active ? 1 : 0.5, textDecorationLine: expenseIndividual.active ? '' : 'line-through' }, styles.isActive]}>
                                                {expenseIndividual.title}
                                            </Text>

                                            <View style={[{ flexDirection: 'row' }]}>

                                                <Icon_material name='silverware-fork-knife' style={[styles.icons, { marginRight: 7, opacity: expenseIndividual.active ? 1 : 0.5, }]} size={17} />

                                                <Text style={[{ color: customStyles.darkGray, fontWeight: '900' }]}>
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

                                                <Text style={[customStyles.bolder,
                                                { fontSize: 18, opacity: expenseIndividual.active ? 1 : 0.5, textDecorationLine: expenseIndividual.active ? '' : 'line-through' }, styles.isActive]}>
                                                    {expenseIndividual.price}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>)
                        }
                    </View>
                )}
            />
            <Footer style={[{ backgroundColor: customStyles.lightGray, height: height * 0.2 }]}>

                <View style={[customStyles.floatCenter]}>

                    <Text style={[styles.total_text, customStyles.bolder]}>
                        TOTAL
                    </Text>

                </View>
                <View style={[customStyles.floatCenter, { alignItems: 'flex-end' }]}>
                    <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }]}>

                        <Text style={[{ fontSize: 20, marginRight: 5, color: customStyles.darkBlue }, customStyles.bolder]}>
                            R$
                        </Text>
                        <Text style={[{ fontSize: 37, color: customStyles.darkBlue }, customStyles.bolder]}>
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
        backgroundColor: customStyles.gray,
    },
    darkerBlue: {
        color: customStyles.darkBlue,
    },
    total_text: {
        opacity: 0.9,
        color: customStyles.darkGray,
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

    ticket: {
        backgroundColor: '#fff',
        marginVertical: 2,
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: width
    },
    icons: {
        color: customStyles.darkGray,
        marginRight: 7,
    },
    searchInput: {
        padding: 10,
        borderColor: '#CCCCCC00',
        borderBottomColor: '#CCCCCC90',
        borderWidth: 1,
        backgroundColor: customStyles.gray
    },
})