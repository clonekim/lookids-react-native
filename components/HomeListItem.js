import React, { Component}  from 'react';
import { StyleSheet, TouchableOpacity, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigationService from '../navigationService';

export default class extends Component {
  render() {
    return (
      <View style={styles.list}>

        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
          <Text style={{fontSize:12, color: '#495057'}}>{this.props.id}</Text>
        </View>

        <View style={{flex: 1}}>
          <Image source={require('../assets/img-xxxhdpi.png')} style={{width:48, height:48}}/>
        </View>

        <View style={{flex: 5, flexDirection:'row', alignItems: 'center',  justifyContent:'flex-start'}}>
          <Text style={styles.contentText}>{this.props.name}</Text>
          <Icon name="star" size={14} color={"#ffaf08"}/>
        </View>

        <View style={{flex: 1,
                      alignItems:'center',
                      justifyContent:'center'}}>

          <Text style={styles.contentHintText}>-</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 2,
    marginBottom: 0,
  },

  contentText: {
    color:'#343a40',
    fontSize: 13,
    fontWeight:'400',
    paddingLeft: 15,
    paddingRight: 4
  },
  
  contentHintText: {
    color: '#ff4f38',
    fontSize:9,
    fontWeight: '700'
  },


});
