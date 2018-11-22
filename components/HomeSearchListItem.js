import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import NavigationService from '../navigationService';

export default (props) => (
  <TouchableOpacity onPress={()=> NavigationService.navigate('HomePage', props) } >
    <View style={styles.list}>
      <View style={{paddingLeft:8, paddingRight:14, justifyContent:'center', alignItems:'flex-start'}}>
        <Image source={require('../assets/img-xxxhdpi.png')} style={{width:48, height:48}}/>
      </View>

      <View style={{justifyContent:'center', alignItems:'flex-start'}}>
        <Text style={styles.contentText}>{props.name}</Text>
      </View>
    </View>
  </TouchableOpacity>)


const styles = StyleSheet.create({
  list: {
    height:71,
    paddingTop:5,
    paddingBottom:12,
    flexDirection:'row',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth:1,
    borderBottomColor:'#dee2e6'
  },

  contentText: {
    color: '#343a40',
    fontSize: 13,
    height: 20,
    fontWeight: '400',
    fontFamily: 'Noto Sans CJK KR Regular'
  }

});
