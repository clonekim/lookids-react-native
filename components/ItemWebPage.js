import React, { Component } from 'react';
import { View, Text, WebView, Modal } from 'react-native';
import FavoriteButton from './FavoriteButton';
import ArrowButton from './ArrowButton';

export default class extends Component {
   render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={{height:50, flexDirection:'row'}}>
          <View style={{ alignItems:'flex-start', justifyContent:'center', paddingLeft: 30}}>
            <ArrowButton {...this.props} />
          </View>
        </View>
        <WebView
          style={{flex:1}}
          source={{uri: this.props.navigation.getParam('url') }}
          originWhitelist={['*']}          
          startInLoadingState={true}
          scalesPageToFit={true}></WebView>       
      </View>
    );
  }
}
