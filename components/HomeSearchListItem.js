import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import NavigationService from '../navigationService';
import Icon from 'react-native-vector-icons/FontAwesome';

const SwitchButton = (props) => {
  if(props.handler) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', paddingRight: 20}}>
        <Icon name={"times-circle"} size={20} color="gray" />
      </View>
    )
  }else {
    return null;
  }
}

export default (props) => (
  <TouchableOpacity onPress={()=> props.handler? props.handler(props): NavigationService.navigate('HomePage', props)} >
    <View style={styles.list}>
      <View style={{paddingLeft:8, paddingRight:14, justifyContent:'center', alignItems:'flex-start'}}>
        <Image source={{uri: props.image_path }} style={{width:48, height:48}}/>
      </View>

      <View style={{justifyContent:'center', alignItems:'flex-start'}}>
        <Text style={styles.contentText}>{props.store_name}</Text>
      </View>

      <SwitchButton {...props}></SwitchButton>
   
    </View>
  </TouchableOpacity>)


const styles = StyleSheet.create({
  list: {
    height:71,
    paddingTop:5,
    paddingBottom:12,
    flex:1,
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
