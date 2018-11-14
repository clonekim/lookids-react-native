import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Item extends Component {

  static navigationOptions = {
    tabBarLabel: '보관함'
  };

  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text>보관함</Text>
      </View>
    );
  }
}
