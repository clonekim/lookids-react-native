import React from 'react';
import {View,
        TouchableWithoutFeedback,
        TextInput,
        StyleSheet } from 'react-native';

import NavigationService from '../navigationService';

export default class extends React.Component {
  
  render(children) {
    return (
      <TouchableWithoutFeedback onPress={() => NavigationService.navigate(this.props.path)}>
        <View style={{height:52, backgroundColor:'#e6eaed', paddingLeft:4, paddingRight:4, paddingTop:6, paddingBottom:6 }}>
          <View style={{height:40, backgroundColor:'#fff', justifyContent:'center'}}>
            <TextInput style={styles.searchBox}
                       editable={false}
                       defaultValue={this.props.children}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}



const styles =StyleSheet.create({
  searchBox:{
    paddingLeft:10,
    color: '#b0b8bf',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Noto Sans CJK KR Regular'
  }
});
