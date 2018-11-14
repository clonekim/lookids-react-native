import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class extends React.Component {
  render() {
    return (
      <View style={styles.badge}> 
        <Image source={{}} style={{width: 90, height: 90, borderRadius: 90/2}}/>
        <Text style={styles.badgeText}>스윙베베</Text>
        <Text style={styles.badgeSmText}>상품수 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0,
  },
  badgeText: {
    width: 66,
    height: 27,
    color: '#212529',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -0.2
  },
  badgeSmText: {
    width: 64,
    height: 18,
    color: '#b0b8bf',
    fontSize: 12,
    fontWeight: '400'
  }
});
