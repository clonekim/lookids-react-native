import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import HomePageNavigator from './HomePageNavigator';

export default class extends Component {
  shouldComponentUpdate() {
    return false;
  }

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
          useWebKit={true}
        </WebView>
      </View>
    );
  }
}
