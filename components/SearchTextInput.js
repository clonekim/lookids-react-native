import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowButton from './ArrowButton';
import CloseButton from './CloseButton';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:''
    };
  }

  clearHandler() {
    this.setState({keyword: ''});
    this.props.updateText('');
  }

  updateText(text) {
    this.setState({keyword: text});
    this.props.updateText(text);
  }

  
  render(){
  
    return (
      <View style={{height:52, backgroundColor: '#e6eaed', paddingLeft:4, paddingRight:4, paddingTop:6, paddingBottom:6}}>
        <View style={{height:40, backgroundColor:'#fff', flexDirection:'row'}}>
          <View style={{paddingLeft:15, justifyContent:'center', width:51}}>
            <ArrowButton {...this.props} />
          </View>

          <View style={{flex:1, alignItem:'stretch', justifyContent:'center'}}>
            <TextInput style={styles.inputText} maxLength={25}  autoFocus={true}  value={this.state.keyword}  onChangeText={(keyword) => this.updateText(keyword)}/>
          </View>

          <View style={{alignItems:'flex-end', justifyContent:'center', paddingLeft:10, paddingRight:12}}>
            <CloseButton keyword={this.state.keyword} clearHandler={this.clearHandler.bind(this)} />
          </View>

        </View>
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
