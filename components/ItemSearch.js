import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Masonry from 'react-native-masonry-layout';
import ArrowButton from './ArrowButton';
import CloseButton from './CloseButton';
import ItemCard    from './ItemCard';
import {apiEndPoint} from '../config';
import {fetchItemsSuccess, fetchItems} from '../actions';


class ItemSearch extends Component {
  constructor() {
    super();
    this.state = {
      keyword:''
    };
  }

  clearHandler() {
    this.setState({keyword: ''});

    if(this.props.contents.rows > 0) {
      this.props.fetchZero();   
      this.masonry.clear();
    }
  }

  keySearch() {
    this.props.fetchData(apiEndPoint + '/items?q=' + this.state.keyword.trim().replace(/\n|\t/ig, ''), this.masonry);
  }


  render() {
   
    return (
      <View style={{flex:1 ,backgroundColor:'#fff'}}>
        <View style={{height:52, backgroundColor: '#e6eaed', paddingLeft:4, paddingRight:4, paddingTop:6, paddingBottom:6}}>
          <View style={{height:40, backgroundColor:'#fff', flexDirection:'row'}}>
            <View style={{paddingLeft:15, justifyContent:'center', width:51}}>
              <ArrowButton {...this.props} />
            </View>

            <View style={{flex:1, alignItem:'stretch', justifyContent:'center'}}>
              <TextInput style={styles.inputText} maxLength={25} value={this.state.keyword} onChangeText={(keyword) => this.setState({keyword})}  onSubmitEditing={this.keySearch.bind(this)}/>
            </View>

            <View style={{alignItems:'flex-end', justifyContent:'center', paddingLeft:10, paddingRight:12}}>
              <CloseButton keyword={this.state.keyword} clearHandler={this.clearHandler.bind(this)} />
            </View>

          </View>
        </View>
        
        <Masonry
          ref={m => this.masonry = m }
          columns={3}
          keyExtractor={(item) => item.id.toString()}
          extraData={this.props.contents.rows}
          containerStyle={{
            paddingTop: 4,
            paddingRight: 2,
            paddingLeft: 2,
            paddingBottom: 2
          }}
          renderItem={item => <ItemCard item={item}/>}/>

      </View>

      
    );
  }
}


const styles = StyleSheet.create({
  inputText: {
    color: '#343a40',
    fontFamily: 'Noto Sans CJK KR Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20
  }
});

const mapStateToProps = state => ({
  contents: state.items
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url, target) => dispatch(fetchItems(url, target)),
  fetchZero: () => dispatch(fetchItemsSuccess([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemSearch);
