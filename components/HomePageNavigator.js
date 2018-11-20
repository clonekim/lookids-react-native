import React from 'react';
import {FlatList, View, Text, Button, TouchableOpacity, ToastAndroid, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { apiEndPoint } from '../config';

export default class extends React.Component {

  addFavorite() {
    AsyncStorage.getItem('token', (err, token) => {
      
      if(err)
        return

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
        })      
    })    
  }

  
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={{padding: 4, flexDirection:'row', height:40}}>
          <View style={{flex:1, backgroundColor:'#fff', flexDirection:'row', paddingLeft:30, paddingRight:80}}>
     
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flex:1, justifyContent:'center'}} >
              <View style={{ justifyContent:'center', alignItem:'center', paddingRight:10}}>
                <Icon name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>

            <View style={{flex:3, justifyContent:'center'}}>
              <Text style={{backgroundColor:'#fff', fontSize:20}}>{this.props.navigation.getParam('name')}</Text>
            </View>

            <TouchableOpacity onPress={() => this.addFavorite() } style={{flex:2, alignItems: 'flex-end', justifyContent:'center', flex: 1}} >
              <View style={{ justifyContent:'center', alignItem:'center', paddingRight:10}}>
                <Icon name="plus-circle" size={40} />
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}
