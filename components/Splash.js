import React from 'react';
import {View, Text, ImageBackground, AsyncStorage} from 'react-native';
import RNDeviceInfo from 'react-native-device-info';

export default class Splash extends React.Component {
  
  fetchToken() {
    return new Promise((resolve, reject) => {
      fetch('http://192.168.0.148:8000/token', {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid: RNDeviceInfo.getUniqueID(),
          system: RNDeviceInfo.getSystemName(),
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
      }, 1000)
    })
  }
  
  render() {
    return (
      <ImageBackground source={require('../assets/splash.png')} style={{width:'100%', height: '100%'}}>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
          <Text style={{fontSize:12}}>Connect...</Text>
        </View>
      </ImageBackground>
    )
  }
}


