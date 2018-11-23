import React, { Component } from 'react';
import { View, Text, WebView, Modal } from 'react-native';
import HomePageNavigator from './HomePageNavigator';

export default class extends Component {
   render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <HomePageNavigator {...this.props}/>

          <WebView
            style={{flex:1}}
            source={{uri: this.props.navigation.getParam('url') }}
            originWhitelist={['*']}          
            startInLoadingState={true}
            scalesPageToFit={true}>
          </WebView>
        </View>
    );
  }
}
