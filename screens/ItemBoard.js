import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Item extends Component {

  static navigationOptions = {
    tabBarLabel: '상품랭킹'
  };

  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Item</Text>
      </View>
    );
  }
}
