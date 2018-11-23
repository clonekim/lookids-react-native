import React, { Component}  from 'react';
import { StyleSheet, TouchableOpacity, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigationService from '../navigationService';

const FavorIcon = (props) => {
  if(props.favor == 1) {
    return <Icon name="star" size={11} color={"#ffaf08"} />
  } else {
    return null;
  }
}

const Hipen = () => {
  return <View style={{height:1, width:4, borderColor:'#495057', borderStyle:'solid', borderWidth:1 }}></View>
}

export default class extends Component {
  render() {
    return (
      <View style={styles.list}>

        <View style={{width:38, alignItems: 'center', justifyContent:'center'}}>
          <Text style={{fontSize:12, fontFamily:'Noto Sans', color: '#495057'}}>{this.props.rank}</Text>
        </View>

        <View style={{flex:1, justifyContent:'center'}}>
          <Image source={{uri: this.props.image_path}} style={{width:48, height:48}}/>
        </View>

        <View style={{flex: 5, flexDirection:'row', alignItems: 'center',  justifyContent:'flex-start'}}>
          <Text style={styles.contentText}>{this.props.store_name}</Text>
          <FavorIcon favor={this.props.favor}/>
        </View>

        <View style={{flex: 1,
                      alignItems:'center',
                      justifyContent:'center'}}>
          <Hipen />      
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  list: {
    height:72,
    flexDirection:'row',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth:1,
    borderBottomColor:'#dee2e6'
  },

  contentText: {
    color:'#343a40',
    fontSize: 13,
    fontWeight:'400',
    fontFamily: 'Noto Sans CJK KR Reqular',
    paddingLeft: 14,
    paddingRight: 11,
    paddingTop:14,
    paddingBottom: 14,

  },
  
  contentHintText: {
    color: '#ff4f38',
    fontSize:9,
    fontWeight: '700'
  },


});
