import React, { Component } from 'react';
import {Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import Masonry from 'react-native-masonry-layout';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Item extends Component {

  static navigationOptions = {
    tabBarLabel: '상품랭킹'
  };

  componentDidMount() {
    const images =[
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_2.jpg', msg: '입으면 이쁘고 이쁘고 이쁘고 이쁘서 안사면 후회할 거야 ㅋㅋㅋㅋㅋ - 가방',  key: '1' },
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_20.jpg', msg: 'ahahaha',  key: '2' },
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_21.jpg', msg: 'This is awesome project', key: '3'},
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_12.jpg', msg:'010012323',  key: '4' },
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_22.jpg', msg: 'xcc',  key: '5'},
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_8.jpg', msg: '뭐지??', key: '6'},
      { uri: 'http://s3-ap-northeast-2.amazonaws.com/demo-lookids/1/item_6.jpg', msg: '시계', key: '7'},
    ];

    this.refs.list.addItems(images);
  }    


  render() {
    return (
      <View style={{flex:1, backgroundColor: '#fff'}}>

        <Masonry
          ref="list"
          columns={3} 
          containerStyle={{
            paddingTop: 4,
            paddingRight: 2,
            paddingLeft: 2,
            paddingBottom: 2            
          }}
          renderItem={item => {
            return (
              <View style={{
                      margin: 2,
                      padding: 8,
                      borderRadius: 2,
                      overflow: 'hidden',
                      borderWidth: 1,
                      borderColor: '#dedede',
                    }}>

                <View style={{alignItems:'center'}}>
                  <TouchableOpacity style={{width:113, height:130}}>
                    <Image source={{uri: item.uri }} style={{position:'absolute', left:0, top:0, width:113, height: 130}}/>
                  </TouchableOpacity>
                </View>
                
                <View style={{padding:2}}>
                  <Text style={{fontSize: 12, fontWeight:'400'}}>{item.msg}</Text>
                  <Text style={{fontSize: 12, fontWeight:'700'}}>67,000원</Text>
                </View>

                <TouchableOpacity>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopWidth: 1, borderColor:'#efefef'}}>
                    <Icon name="star" size={16} style={{ marginTop: 4, marginLeft:4, color:'yellow' }} />
                    <Text style={{fontSize: 12, paddingLeft: 5}}>찜</Text>
                  </View>                  
                </TouchableOpacity>

                <Icon name="star" size={23} style={{position: 'absolute', marginTop: 4, marginLeft:4, color:'yellow' }} />
                <Text style={{position:'absolute', fontWeight:'700', color:'red', marginTop: 6, marginLeft: 10}} >1</Text>

              </View>
            );} 
          }/>

      </View>
      
    );
  }
}
