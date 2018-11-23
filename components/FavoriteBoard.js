import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import FavoriteStoreBoard from './FavoriteStoreBoard';
import FavoriteItemList from './FavoriteItemList';
import NavigationService from '../navigationService';
import Icon from 'react-native-vector-icons/FontAwesome';
import {apiEndPoint} from '../config';
import {fetchFavorites, fetchStars} from '../actions';

const FavoriteText =(props) => {
  return <Text style={{color: '#343a40', paddingLeft:6,  fontSize:13, fontFamily:'Noto Sans CJK KR Regular', fontWeight:'500'}}>즐겨찾기 ({props.count})</Text>;
};

const FavoriteEditText =(props) => {
  return (
    <TouchableOpacity onPress={()=> NavigationService.navigate(props.path) }>
      <Text style={{color: '#9b9b9b', fontSize:12, fontFamily:'Noto Sans CJK KR Regular', fontWeight:'500'}}>편집 ></Text>
    </TouchableOpacity>
  );    
};

const FavoriteStartText =(props) => {
  return <Text style={{color: '#343a40', paddingLeft:5,  fontWeight:'500'}}>찜한 상품 ({props.count})</Text>;
};

const MoreButon = (props) => {
  if(props.count > 9 ) {
    return (
      <TouchableOpacity style={{ padding: 10, borderWidth:1, borderColor:'#9b9b9b', borderStyle:'solid',  borderRadius: 25, backgroundColor: '#fff'}}>
        <View style={{ justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
          <Text>더보기</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};


class FavoriteBoard extends Component {

  static navigationOptions = {
    tabBarLabel: '보관함'
  };

  fetchMulti() {
    this.props.fetchFavors(apiEndPoint + '/favorites');
    this.props.fetchStars(apiEndPoint + '/stars');

  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <NavigationEvents onWillFocus={()=> this.fetchMulti()} />

        <View style={{height:5, backgroundColor:'#dddddd'}}></View>

        <View style={{flexDirection:'row', paddingLeft:33, paddingRight: 12,  paddingTop: 10, paddingBottom: 10}}>
          <View style={{flex:1, alignItems:'flex-start', flexDirection:'row'}}>
            <Icon name="plus" size={20} color="#ffaf08"/>
            <FavoriteText count={this.props.contents.total}/>
          </View>

          <View style={{flex:1, alignItems:'flex-end'}}>
            <FavoriteEditText path={'FavoriteStoreEdit'}/>
          </View>          
        </View>
        
        <View style={{flex:2}}>
          <Text>{this.props.totals}</Text>
          <FavoriteStoreBoard rows={this.props.contents.rows} />
        </View>
        
        <View style={{height:5, backgroundColor:'#dddddd'}}></View>

        <View style={{flex:3}}>
          <View style={{flexDirection:'row',  paddingLeft:33, paddingRight: 12, paddingTop: 10, paddingBottom: 10}}>
            <View style={{flexDirection:'row', flex:1, alignItems:'flex-start'}}>
              <Icon name="star" size={20} color="#ffaf08" />
              <FavoriteStartText count={this.props.stars.total}/>
            </View>

            <View style={{flex:1, alignItems: 'flex-end'}}>
              <FavoriteEditText path={'FavoriteItemEdit'}/>
            </View>            
          </View>

          <FavoriteItemList rows={this.props.stars.rows}/>
        </View>

        <View style={{padding: 10}}>
          <MoreButon count={this.props.stars.total}/>
        </View>
      
      </View>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.favorites,
  stars: state.stars,
});

const mapDispatchToProps = dispatch => ({
  fetchFavors: (url) => dispatch(fetchFavorites(url)),
  fetchStars: (url) => dispatch(fetchStars(url)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBoard);
