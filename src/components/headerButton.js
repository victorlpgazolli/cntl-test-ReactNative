
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

var searchVisible = false, editVisible = false;
function headerButton({ navigation, screenProps }) {
    return (
        screenProps.icon == 'search' ?
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { searchVisible = !searchVisible; navigation.setParams({ search: searchVisible }) }} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
                    <Icon name='search' style={{ color: '#556474' }} size={24} />
                </TouchableOpacity>
            </View>
            :
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { editVisible = !editVisible; navigation.setParams({ edit: editVisible }) }} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
                    <Icon name='pen' style={{ color: '#556474' }} size={24} />
                </TouchableOpacity>
            </View>
    )
}
export default withNavigation(headerButton);