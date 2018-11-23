import React from 'react';
import {connect} from 'react-redux';
import {FlatList, Image, View, Text, Button, TouchableOpacity, ActivityIndicator, AsyncStorage, ToastAndroid} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Masonry from 'react-native-masonry-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageNavigator from './HomePageNavigator';
import NavigationService from '../navigationService';
import Badge             from './Badge';
import ItemSearchBox     from './ItemSearchBox';
import ItemCard          from './ItemCard';
import { apiEndPoint } from '../config';
import util from '../util';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      page:1,
      limit: 0
    };
  }
  
  componentWillMount() {
    AsyncStorage.getItem('token', (err, token) => {
      fetch(apiEndPoint + '/stores/' + this.props.navigation.getParam('id') + '/items', {
        method: 'GET',
        headers:{
          'Accept':       'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' +token
        }
      })
        .then(res => res.json())
        .then(resJson => {
          this.setState({page:resJson.page, limit: resJson.limit});
          this.refs.masonry.addItems(resJson.rows);      
        });
    });
  }

  //찜처리
  addFavoriteItem(item) {
    AsyncStorage.getItem('token', (err, token) => {
      fetch(apiEndPoint + '/stars', {
        method: 'PATCH',
        headers:{
          'Accept':       'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' +token
        },
        body: JSON.stringify({id:item.id, deleted: item.favor||0})
      })
        .then(res => res.json())
        .then(resJson => {
          item.favor = resJson.favor
          let msg = item.favor == 1 ? '보관함에 찜상품으로 등록했습니다': '찜을 취소 했습니다';
          ToastAndroid.show(msg, ToastAndroid.SHORT);
        });
    }); 
  }

  render() {

    return (
      <View style={{flex:1}}>
        <HomePageNavigator {...this.props}/>
        <Badge {...this.props.navigation.state.params} />
        <ItemSearchBox />
        <View style={{flex: 5, paddingTop:8, paddingLeft:6, paddingRight:4, paddingBottom:6}}>
          <Masonry
            ref='masonry'
            columns={3} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={item => <ItemCard item={item} handler={this.addFavoriteItem.bind(this)} />} />
        </View>
      </View>
    );
  }
}


export default HomePage;

