import React from 'react';
import {View, Text, ImageBackground, AsyncStorage, ActivityIndicator} from 'react-native';
import RNDeviceInfo from 'react-native-device-info';
import { apiEndPoint } from '../config';

export default class Splash extends React.Component {
  
  fetchToken() {
    return new Promise((resolve, reject) => {
      fetch( apiEndPoint + '/token', {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid: RNDeviceInfo.getUniqueID(),
          system: RNDeviceInfo.getSystemName(),
          timeZone: RNDeviceInfo.getTimezone(),
          userAgent: RNDeviceInfo.getUserAgent()
        })
      })
        .then(res => res.json())
        .then(resJson => {
          if(resJson.token) {
            AsyncStorage.setItem('token', resJson.token, (err, result) => {
              if(err)
                reject(err)
              else
                resolve(resJson.token)
            });
          }
        })
        .catch(err => {
          reject(err)
        })
      
    });
  }
  
  componentDidMount() {
    this.fetchToken().then((token) => {
      setTimeout(()=> {
        this.props.navigation.replace('TabNavigator')
      }, 1200)
    })
  }
  
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
        <ImageBackground source={require('../assets/splash.png')} resizeMode={"contain"}  style={{width:'100%', height: '100%', margin:0, padding:0}}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="small" />
          </View>
        </ImageBackground>
      </View>
    )
  }
}


