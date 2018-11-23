import React from 'react';
import {FlatList, View, Text, Button, TouchableOpacity, ToastAndroid, AsyncStorage ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowButton from './ArrowButton';
import FavoriteButton from './FavoriteButton';
import { apiEndPoint } from '../config';

export default class extends React.Component {  
  render() {
    return (
      <View style={{height:52, flexDirection:'row'}}>
        <View style={{paddingLeft:15, justifyContent:'center', width:51}}>
          <ArrowButton {...this.props} />
        </View>
        <View style={{alignItems:'flex-start', justifyContent:'center'}}>
          <Text style={styles.title}>{this.props.navigation.getParam('store_name')}</Text>
        </View>
        
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight: 13}}>
          <FavoriteButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 29,
    color: '#212529',
    fontFamily: 'Noto Sans CJK KR Regular',
    fontSize: 20,
    fontWeight: '400'
  }
});
