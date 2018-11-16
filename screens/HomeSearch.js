import React, { Component } from 'react';
import { Button,
         Image,
         ImageBackground,
         View,
         Text,
         TextInput,
         StyleSheet,
         TouchableOpacity,
         TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={{backgroundColor: 'gray', padding: 4, flexDirection:'row'}}>
          <View style={{flex:1, backgroundColor:'#fff', flexDirection:'row', paddingLeft:30, paddingRight:80}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{justifyContent:'center'}} >
              <View style={{ justifyContent:'center', alignItem:'center', paddingRight:10}}>
                <Icon name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>

            <View style={{alignItem:'stretch', justifyContent:'center'}}>
              <TextInput style={{backgroundColor:'#fff', fontSize:14}} autoFocus={true} />
            </View>

          </View>
        </View>

        <View style={{ flexDirection: 'column', padding: 4}}>
          <TouchableOpacity >
            <View style={{ flexDirection:'row', borderWidth: 0, margin: 2}}>
              <View style={{flex: 2}}>
                <ImageBackground source={require('../assets/img-xxxhdpi.png')} style={{width:48, height:48}}/>
              </View>

              <View style={{flex: 5, alignItems: 'flex-start',  justifyContent:'center'}}>
                <Text style={styles.contentText}>키즈몰</Text>
              </View>
            </View>
          </TouchableOpacity>          
        </View>


        <View style={{padding: 20}}>
          <TouchableOpacity style={{ padding: 10, borderWidth:1, borderColor:'gray', borderRadius: 40, backgroundColor: '#fff'}}>
            <View style={{ justifyContent:'center', flexDirection:'row', alignItem:'center'}}>
              <Text>'키' 쇼핑물 추가 요청하기</Text>
            </View>           
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 2,
    marginBottom: 1,
  },

  contentText: {
    color:'#343a40',
    fontSize: 13,
    fontWeight:'400'
  },
  
  contentHintText: {
    color: '#ff4f38',
    fontSize:9,
    fontWeight: '700'
  }

});

