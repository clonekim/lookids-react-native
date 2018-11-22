import React from 'react';
import {FlatList, Image, View, Text, Button, TouchableOpacity} from 'react-native';
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
  
  fetchData({state}) {
    fetch(apiEndPoint + '/stores/' +state.params.id + '/items')
    .then(res => res.json())
    .then(resJson => {

      this.setState({page:resJson.page, limit: resJson.limit});
      this.refs.masonry.addItems(resJson.rows);
      
    });
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <NavigationEvents onWillFocus={payload => this.fetchData(payload)}/>
        <HomePageNavigator {...this.props}/>
        <Badge {...this.props.navigation.state.params} />
        <ItemSearchBox />
        <View style={{flex: 5}}>
          <Masonry
            ref="masonry"
            columns={3} 
            containerStyle={{
              paddingTop: 4,
              paddingRight: 2,
              paddingLeft: 2,
              paddingBottom: 2            
            }}
            keyExtractor={(item) => item.id.toString()}
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
                    <TouchableOpacity style={{width:113, height:130}} onPress={()=> NavigationService.navigate('ItemWebPage', item)}>
                      <Image source={{uri: item.image_path }} style={{position:'absolute', left:0, top:0, width:113, height: 130}}/>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={{padding:2}}>
                    <Text style={{fontSize: 12, fontWeight:'400'}}>{item.name}</Text>
                    <Text style={{fontSize: 12, fontWeight:'700'}}>{util.currencyFormat(item.price)}원</Text>
                  </View>

                  <TouchableOpacity>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopWidth: 1, borderColor:'#efefef'}}>
                      <Icon name="star" size={16} style={{ marginTop: 4, marginLeft:4, color:'yellow' }} />
                      <Text style={{fontSize: 12, paddingLeft: 5}}>찜</Text>
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
