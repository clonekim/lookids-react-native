import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text, StyleSheet } from 'react-native';

export default (props) => (
  <TouchableOpacity >
    <View style={{ flexDirection:'row', borderWidth: 0, margin: 2}}>
      <View style={{flex: 2}}>
        <ImageBackground source={require('../assets/img-xxxhdpi.png')} style={{width:48, height:48}}/>
      </View>

      <View style={{flex: 5, alignItems: 'flex-start',  justifyContent:'center'}}>
        <Text style={styles.contentText}>{props.name}</Text>
      </View>
    </View>
  </TouchableOpacity>)


const styles = StyleSheet.create({
  contentHintText: {
    color: '#ff4f38',
    fontSize:9,
    fontWeight: '700'
  }
});
