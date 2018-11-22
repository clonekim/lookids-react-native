import React from 'react';
import {connect} from 'react-redux';
import {FlatList, Image, View, Text, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Masonry from 'react-native-masonry-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageNavigator from './HomePageNavigator';
import NavigationService from '../navigationService';
import Badge             from './Badge';
import ItemSearchBox     from './ItemSearchBox';
import { apiEndPoint } from '../config';
import util from '../util';
import { findStore } from '../actions';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      page:1,
      limit: 0
    };
  }
  
  componentWillMount() {
    let id = this.props.navigation.getParam('id');
    this.props.fetchData(apiEndPoint + '/stores/' + id)

    fetch(apiEndPoint + '/stores/' + id + '/items')
    .then(res => res.json())
    .then(resJson => {
      this.setState({page:resJson.page, limit: resJson.limit});
      this.refs.masonry.addItems(resJson.rows);      
    });
  }

  

  render() {
    if(this.props.isPending) {
      return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><ActivityIndicator size="small" /></View>;
    }

    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <HomePageNavigator {...this.props}/>
        <Badge {...this.props.navigation.state.params} />
        <ItemSearchBox />
        <View style={{flex: 5}}>
          <Masonry
            ref='masonry'
            onScroll={this.reactOnScroll}
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

                  alignItems:'center',
                  overflow: 'hidden',
                  width: 112,


                  shadowColor: 'rgba(73, 80, 87, 0.1)',
                  shadowOffset: { width: 1, height: 0 },
                  shadowRadius: 1,
                  backgroundColor: '#ffffff'}}>

                  <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{width:113, height:130}} onPress={()=> NavigationService.navigate('ItemWebPage', item)}>
                      <Image source={{uri: item.image_path }} style={{position:'absolute', left:0, top:0, width:113, height: 130}}/>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={{padding:2}}>
                    <Text style={{fontSize: 10, color:'#495057', fontFamily:'Noto Sans CJK KR Regular', fontWeight:'400'}}>{item.name}</Text>
                    <Text style={{fontSize: 10, color:'#343a40', fontFamily:'Noto Sans CJK KR Bold',  fontWeight:'700'}}>{util.currencyFormat(item.price)}원</Text>
                  </View>
                  <View style={{flex:1, height:3, backgroundColor:'gray'}}></View>

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



const mapStateToProps = state => ({
  store: state.store,
  hasError: state.getFetchError,
  isPending: state.getPending
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(findStore(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


