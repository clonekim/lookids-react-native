import React from 'react';
import {FlatList, View, Text, Button, TouchableOpacity, ToastAndroid, AsyncStorage ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowButton from './ArrowButton';
import FavoriteButton from './FavoriteButton';
import { apiEndPoint } from '../config';

export default class extends React.Component {

  addFavorite() {
    AsyncStorage.getItem('token', (err, token) => {
      
      if(err)
        return;

      fetch( apiEndPoint + '/favorites', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          content_id: this.props.navigation.getParam('id')
        })
      }).then( res => res.json())
        .then( resJson => {
          ToastAndroid.show('즐겨찾기 되었습니다', ToastAndroid.SHORT);
        });
    });
  }

  
  render() {
    return (
      <View style={{height:52, flexDirection:'row'}}>
        <View style={{paddingLeft:15, justifyContent:'center', width:51}}>
          <ArrowButton {...this.props} />
        </View>
        <View style={{alignItems:'flex-start', justifyContent:'center'}}>
          <Text style={styles.title}>{this.props.navigation.getParam('name')}</Text>
        </View>
        
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight: 13}}>
          <FavoriteButton/>
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
