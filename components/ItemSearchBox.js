import React from 'react';
import {Image,Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

const PipeHLine =() => {
  return (
    <View style={{
            marginLeft:4,
            marginRight: 4,
            height:11,
            width:1, 
            borderColor:'#979797',
            borderStyle:'solid',
            borderWidth:1}}></View>
  );
};

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: ''
    };
  }

  componentDidMount() {
    this.setState({keyword: '상품검색'});
  }

  render() {
    return (
      <View style={{ height:39, backgroundColor:'#f9f9fa', flexDirection:'row'}}>
        <View style={{flex:1, justifyContent:'flex-start' , alignItems:'center', flexDirection:'row', paddingLeft:15}}>
          <Image source={require('../assets/magnifier.png')} style={{width:20, height: 20}}/>
          <TextInput style={[styles.magnifierText, {paddingLeft:9}]} value={this.state.keyword} />
        </View>

        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'flex-end', paddingRight:13}}>

          <Text style={styles.sortText}>신상품</Text>
          <PipeHLine/>

          <Text style={styles.sortText}>인기순</Text>
          <PipeHLine/>

          <Text style={styles.sortText}>저가순</Text>
          
        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  magnifierText: {
    color: '#97a0a8',
    fontFamily: 'Noto Sans CJK KR Regular',
    fontSize: 14,
    fontWeight: '400'
  },

  sortText: {
    color: '#868e96',
    fontFamily: 'Noto Sans CJK KR Regular',
    fontSize: 12,
    fontWeight: '400'
  }

});
