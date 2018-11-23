import React, { Component } from 'react';
import {Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import Masonry from 'react-native-masonry-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBox from '../components/SearchBox';
import ItemCard from './ItemCard';

export default class Item extends Component {

  static navigationOptions = {
    tabBarLabel: '상품랭킹'
  };

  componentDidMount() {
    const images =[
      { image_path: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_2.jpg', rank:1,   name: '빌티드 레더 퍼 무스탕', favor: 1, price:45500,  key: '1' },
      { image_path: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_20.jpg', rank: 2, name: '모모 니트 샤 우너피스',favor: 1, price:29000,  key: '2' },
      { image_path: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_21.jpg', rank: 3, name: '남아 코드 특가', favor:0, price: 19800, key: '3'},
      { image_path: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_12.jpg', rank: 6, name:'아이 하루 롱패팅 6색', favor:0, price:47000,  key: '4' },
      { image_path: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_22.jpg', rank: 5,  name: 'SNAZZY TRACKSUITSET', favor: 1, price:89000,  key: '5'},
      { image_path: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_8.jpg', rank: 4, name: '양털 코트(공용)', price: 67000, key: '6'},
    ];

    this.refs.list.addItems(images);
  }    


  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:2, backgroundColor:'#dddddd'}}></View>
        <SearchBox path={"ItemSearch"}>상품 검색</SearchBox>
        <View style={{height:46, paddingLeft:10, backgroundColor:'#fff', justifyContent:'center' }}>
          <Text style={{color:'#343a40', fontFamily:'Noto Sans CJK KR Medium', fontSize:15}}>상품랭킹</Text>
        </View>

        <Masonry
          ref="list"
          columns={3} 
          containerStyle={{
            paddingTop: 4,
            paddingRight: 2,
            paddingLeft: 2,
            paddingBottom: 2            
          }}
          renderItem={item => <ItemCard item={item} />}/>

      </View>
      
    );
  }
}
