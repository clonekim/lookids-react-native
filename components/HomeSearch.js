import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,
         Image,
         ImageBackground,
         View,
         Text,
         TextInput,
         FlatList,
         StyleSheet,
         TouchableOpacity,
         TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeSearchListItem from './HomeSearchListItem';
import { fetchSearch, fetchNop } from '../actions/search';


class HomeSearch extends Component {


  captchTextChange(text) {
    if(text.trim().length > 0) {
      this.props.fetchData('http://192.168.0.148:8000/stores?q=' + text);
    }else {
    }
  }


  render() {

    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={{backgroundColor: 'gray', padding: 4, flexDirection:'row'}}>
          <View style={{flex:1, backgroundColor:'#fff', flexDirection:'row', paddingLeft:30, paddingRight:80}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{justifyContent:'center'}} >
              <View style={{ justifyContent:'center', alignItem:'center', paddingRight:10}}>
                <Icon name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>

            <View style={{alignItem:'stretch', justifyContent:'center'}}>
              <TextInput style={{backgroundColor:'#fff', fontSize:14}} autoFocus={true}  onChangeText={(text) => this.captchTextChange(text)}/>
            </View>

          </View>
        </View>


        <FlatList
          data={this.props.contents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={{ flexDirection: 'column', padding: 4}}>
                <HomeSearchListItem {...item}/>
              </View>          
            );
          }} />   


        <View style={{padding: 20}}>
          <TouchableOpacity style={{ padding: 10, borderWidth:1, borderColor:'gray', borderRadius: 40, backgroundColor: '#fff'}}>
            <View style={{ justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
              <Text>'키' 쇼핑물 추가 요청하기</Text>
            </View>           
          </TouchableOpacity>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 2,
    marginBottom: 1,
  },

  contentText: {
    color:'#343a40',
    fontSize: 13,
    fontWeight:'400'
  },
  
  contentHintText: {
    color: '#ff4f38',
    fontSize:9,
    fontWeight: '700'
  }

});


const mapStateToProps = state => ({
  contents: state.searches,
  isTyping: state.loadSearch
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(fetchSearch(url)),
  fetchNop: () => dispatch(fetchNop())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
