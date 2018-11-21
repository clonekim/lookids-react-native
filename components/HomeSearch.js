import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import HomeSearchListItem from './HomeSearchListItem';
import SearchTextInput  from './SearchTextInput';
import {fetchSearch, fetchSearchSuccess } from '../actions/search';
import {apiEndPoint} from '../config';

const RequestSearchButton = (props) => {
  if(props.keyword.trim().length > 0) {
    return (
        <View style={{padding: 20}}>
          <TouchableOpacity style={{ padding: 10, borderWidth:1, borderColor:'gray', borderRadius: 40, backgroundColor: '#fff'}}>
            <View style={{ justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
              <Text>'{props.keyword.trim()}' 쇼핑물 추가 요청하기</Text>
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

  captchTextChange(text) {
    if(text.trim().length > 0) {
      this.props.fetchData(apiEndPoint + '/stores?q=' + text.trim());
    }else {
      this.props.fetchZero();
    }
  }

  receiveText(text) {
    this.setState({keyword: text});
    this.captchTextChange(text);
  }

  render() {

    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <SearchTextInput {...this.props} updateText={this.receiveText.bind(this)}/>

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

        <RequestSearchButton keyword={this.state.keyword}/>

      </View>

    );
  }
}


const mapStateToProps = state => ({
  contents: state.searches
});

const mapDispatchToProps= dispatch => ({
  fetchData: (url) => dispatch(fetchSearch(url)),
  fetchZero: () => dispatch(fetchSearchSuccess([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
