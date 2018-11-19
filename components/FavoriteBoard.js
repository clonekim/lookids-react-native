import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Item extends Component {

  static navigationOptions = {
    tabBarLabel: '보관함'
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Text>즐겨찾기 (16)</Text>
          <View>
            
          </View>
        </View>

        <View style={{flex:1}}>
          <Text>찜한 상품 (18)</Text>
        </View>
      
      </View>
    );
  }
}
