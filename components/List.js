import React, { Component}  from 'react';
import { StyleSheet,
         TouchableOpacity,
         Text,
         View,
         Image } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{
                flex: 1,
                flexDirection:'column',
                height: 72,
                padding: 4,
                justifyContent: 'space-around',
              }}>

          <View style={styles.contentSmBox}>
            <Text>{this.props.rank}</Text>
          </View>

          
          <View style={styles.contentSmBox}>
            <Text style={styles.contentHintText}>NEW</Text>
          </View>
        </View>


        <View style={{
                flex: 2,
                width: 72, 
                height: 72,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
          <Image style={{width:64, height:64}} source={require('../assets/img-xxxhdpi.png')} />
        </View>


        <View style={{ flex: 5, height: 72, padding: 10}}>
          <View style={styles.contentBox}>            
            <Text style={styles.contentText}>블링샵</Text>
          </View>
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
    marginBottom: 3,
  },

  contentSmBox: {
    flex:1,
    width:'100%',
    height: 17,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'    
  },

  contentBox: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
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
  },


});
