import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FavoriteStoreList from './FavoriteStoreList';
import FavoriteItemList from './FavoriteItemList';
import NavigationService from '../navigationService';
import Icon from 'react-native-vector-icons/FontAwesome';


const FavoriteText =(props) => {
  return <Text style={{color: '#343a40', fontWeight:'500'}}>즐겨찾기 ({props.count})</Text>;
};

const FavoriteEditText =(props) => {
  return (
    <TouchableOpacity onPress={()=> NavigationService.navigate(props.path) }>
      <Text style={{color: '#9b9b9b', fontWeight:'500'}}>편집</Text>
    </TouchableOpacity>
  );    
};

const FavoriteStartText =(props) => {
  return <Text style={{color: '#343a40', paddingLeft:5,  fontWeight:'500'}}>찜한 상품 ({props.count})</Text>;
};

const MoreButon = (props) => {
  return (
    <TouchableOpacity style={{ padding: 10, borderWidth:1, borderColor:'#9b9b9b', borderStyle:'solid',  borderRadius: 25, backgroundColor: '#fff'}}>
      <View style={{ justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
        <Text>더보기</Text>
      </View>
    </TouchableOpacity>);
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
            <FavoriteEditText path={'FavoriteStoreEdit'}/>
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
              <FavoriteEditText path={'FavoriteItemEdit'}/>
            </View>            
          </View>

          <FavoriteItemList/>
        </View>

        <View style={{padding: 10}}>
          <MoreButon/>
        </View>
      
      </View>
    );
  }
}
