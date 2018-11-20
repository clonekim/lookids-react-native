import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteStoreList from './FavoriteStoreList';
import FavoriteItemList from './FavoriteItemList';


const FavoriteText =(props) => {
  return  <Text style={{color: '#343a40', fontWeight:'500'}}>즐겨찾기 ({props.count})</Text>;
};

const FavoriteEditText =(props) => {
  return <Text style={{color: '#9b9b9b', fontWeight:'500'}}>편집</Text>;
};

const FavoriteStartText =(props) => {
  return <Text style={{color: '#343a40', paddingLeft:5,  fontWeight:'500'}}>찜한 상품 ({props.count})</Text>;
};



export default class Item extends Component {

  static navigationOptions = {
    tabBarLabel: '보관함'
  };

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={{height:5, backgroundColor:'#dddddd'}}></View>

        <View style={{flexDirection:'row', paddingLeft:33, paddingRight: 20,  paddingTop: 10, paddingBottom: 10}}>
          <View style={{flex:1, alignItems:'flex-start'}}>
            <FavoriteText count={3}/>
          </View>

          <View style={{flex:1, alignItems:'flex-end'}}>
            <FavoriteEditText/>
          </View>          
        </View>
        
        <View style={{flex:2}}>
          <FavoriteStoreList />
        </View>
        
        <View style={{height:5, backgroundColor:'#dddddd'}}></View>

        <View style={{flex:3}}>
          <View style={{flexDirection:'row',  paddingLeft:33, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
            <View style={{flexDirection:'row', flex:1, alignItems:'flex-start'}}>
              <Icon name="star" size={20} color="#ffaf08" />
              <FavoriteStartText count={3}/>
            </View>

            <View style={{flex:1, alignItems: 'flex-end'}}>
              <FavoriteEditText/>
            </View>            
          </View>

          <FavoriteItemList/>
        </View>

        <View style={{padding: 10}}>
            <TouchableOpacity style={{ padding: 10, borderWidth:1, borderColor:'#9b9b9b', borderStyle:'solid',  borderRadius: 25, backgroundColor: '#fff'}}>
              <View style={{ justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
                <Text>더보기</Text>
              </View>
            </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}
