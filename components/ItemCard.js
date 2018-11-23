import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import util from '../util';


const ItemCard  = (props) => (
  <View style={{
          overflow: 'hidden',
          width: 120,
          shadowColor: 'rgba(73, 80, 87, 0.1)',
          shadowOffset: { width: 1, height: 0 },
          shadowRadius: 1,
          marginBottom: 8,
          margin:1,
        backgroundColor: '#ffffff'}}>

    <View style={{alignItems:'center'}}>
      <TouchableOpacity style={{width:120, height:130}} onPress={()=> NavigationService.navigate('ItemWebPage', item)}>
        <Image source={{uri: props.item.image_path }} style={{position:'absolute', left:0, top:0, width:120, height: 130}}/>
      </TouchableOpacity>
    </View>
    
    <View style={{padding:2, alignItems:'flex-start'}}>
      <Text style={{fontSize: 10, color:'#495057', fontFamily:'Noto Sans CJK KR Regular', fontWeight:'400'}}>{props.item.name}</Text>
      <Text style={{fontSize: 10, color:'#343a40', fontFamily:'Noto Sans CJK KR Bold',  fontWeight:'700'}}>{util.currencyFormat(props.item.price)}원</Text>
    </View>

    <View style={{flex:1, height:0, borderWidth:1, borderColor:'#f9f9fa'}}></View>

    <TouchableOpacity style={{height:27}}>
      <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopWidth: 1, borderColor:'#efefef'}}>
        <Icon name="star" size={11} color={props.item.favor ==1 ? '#ffaf08':'#ffffff'} />
        <Text style={{fontSize: 10, color:'#868e96', fontFamily:'Noto Sans CJK KR Regular', fontWeight:'400',  paddingLeft: 5}}>찜</Text>
      </View>                  
    </TouchableOpacity>

    <Image source={require('../assets/mark.png')} style={{width:16, height:23, position:'absolute',}} />
    <Text style={{position:'absolute', color:'#fff', fontSize:10, fontWeight:'400',}}>{props.item.rank}</Text>
  </View>
);

export default ItemCard;
