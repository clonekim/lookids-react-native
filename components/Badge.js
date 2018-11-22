import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import util from '../util';

export default class extends React.Component {
  render() {
    return (
      <View style={styles.badge}> 
        <Image source={require('../assets/brand.png')} style={{width: 90, height: 90, borderRadius: 90/2}}/>
        <Text style={styles.badgeText}>{this.props.name}</Text>
        <Text style={styles.badgeSmText}>상품수 {util.currencyFormat(this.props.total)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    height: 140,
    justifyContent:'flex-start',
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0,
  },
  badgeText: {
    height: 27,
    color: '#212529',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Noto Sans CJK KR Regular',
    letterSpacing: -0.2
  },
  badgeSmText: {
    height: 18,
    color: '#b0b8bf',
    fontSize: 12,
    fontFamily:'Noto Sans CJK KR Regular',
    fontWeight: '400'
  }
});
