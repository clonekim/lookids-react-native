import React from 'react';
import {connect} from 'react-redux';
import {FlatList, Image, View, Text, Button, TouchableOpacity, ActivityIndicator, AsyncStorage} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Masonry from 'react-native-masonry-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageNavigator from './HomePageNavigator';
import NavigationService from '../navigationService';
import Badge             from './Badge';
import ItemSearchBox     from './ItemSearchBox';
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
            renderItem={item => {
              return (
                <View style={{
                  overflow: 'hidden',
                  width: 112,
                  shadowColor: 'rgba(73, 80, 87, 0.1)',
                  shadowOffset: { width: 1, height: 0 },
                  shadowRadius: 1,
                  marginBottom: 8,
                  margin:1,
                  backgroundColor: '#ffffff'}}>

                  <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{width:113, height:130}} onPress={()=> NavigationService.navigate('ItemWebPage', item)}>
                      <Image source={{uri: item.image_path }} style={{position:'absolute', left:0, top:0, width:113, height: 130}}/>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={{padding:2, alignItems:'flex-start'}}>
                    <Text style={{fontSize: 10, color:'#495057', fontFamily:'Noto Sans CJK KR Regular', fontWeight:'400'}}>{item.name}</Text>
                    <Text style={{fontSize: 10, color:'#343a40', fontFamily:'Noto Sans CJK KR Bold',  fontWeight:'700'}}>{util.currencyFormat(item.price)}원</Text>
                  </View>

                  <View style={{flex:1, height:1, backgroundColor:'gray'}}></View>

                  <TouchableOpacity style={{height:27}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopWidth: 1, borderColor:'#efefef'}}>
                        <Text style={{fontSize: 10, color:'#868e96', fontFamily:'Noto Sans CJK KR Regular', fontWeight:'400',  paddingLeft: 5}}>찜</Text>
                    </View>                  
                  </TouchableOpacity>

                </View>
              );}
            }/>
        </View>
      </View>
    );
  }
}


export default HomePage;

