import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import HomeSearchListItem from './HomeSearchListItem';
import SearchTextInput  from './SearchTextInput';
import {findStores, fetchSearchSuccess, sendSuggest} from '../actions';
import {apiEndPoint} from '../config';

const RequestSearchButton = (props) => {
  if(props.keyword.trim().length > 0) {
    return (
        <View style={{flex:1, padding: 30, backgroundColor:'#fff'}}>
          <TouchableOpacity style={{
                              height:44,
                              padding: 10,
                              borderWidth:1,
                              borderStyle:'solid',
                              borderColor:'#9b9b9b',
                              borderRadius: 25,
                            backgroundColor: '#fff'}} onPress={()=> props.sendHandler(props.keyword) }>
            <View style={{flex:1, justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
              <Text style={{
                      color: '#9b9b9b',
                      fontSize:14,                      
                      fontWeight:'400',
                      fontFamily: 'Noto Sans CJK KR Regular'}}>'{props.keyword.trim().substring(0,10)}'쇼핑물 추가 요청하기</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  } else {
    return null;
  }
};



class HomeSearch extends Component {
  
  constructor() {
    super();
    this.state = {
      keyword: ''
    };

    this.captchTextChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchZero();
  }

  captchTextChange(text) {
    if(text.trim().length > 0) {
      this.props.fetchData(apiEndPoint + '/stores?q=' + text.trim());
    }else {
      this.props.fetchZero();
    }
  }

  postKeyword(text) {
    if(text.trim().length > 0) {
//      this.props.postSugguest(text);
    }
  }

  receiveText(text) {
    this.setState({keyword: text});
    this.captchTextChange(text);
  }



  render() {
    return (
      <View style={{flex:1,  backgroundColor:'#fff'}}>
        <SearchTextInput {...this.props} updateText={this.receiveText.bind(this)}/>

        <FlatList
          style={{flex:1}}
          data={this.props.contents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return (
              <HomeSearchListItem {...item}/>
            );
          }} />   

        <RequestSearchButton keyword={this.state.keyword} touchHandler={this.postKeyword.bind(this)}/>

      </View>

    );
  }
}


const mapStateToProps = state => ({
  contents: state.searches
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(findStores(url)),
  fetchZero: () => dispatch(fetchSearchSuccess([])),
  postSugguest: (url, payload) => dispatch(sendSuggest(url, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
