import React, {Component} from 'react';
import {Platform, StatusBar, View, StyleSheet} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import HomeBoard          from './screens/HomeBoard';
import ItemBoard          from './screens/ItemBoard';
import FavoriteBoard      from './screens/FavoriteBoard';
import HomeSearch         from './screens/HomeSearch';

// 탭기반 화면들
const HomeStack = createMaterialTopTabNavigator ({
  HomeBoard, //쇼핑몰
  ItemBoard, //상품랭킹
  FavoriteBoard, //보관함
},{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white'
    }
  }
});


const RootStack = createStackNavigator ({
  HomeStack,
  HomeSearch,
},{
  mode: 'modal',
  headerMode: 'none',
});



export default class App extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <StatusBar hide={true} />
        <RootStack />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: 0}
    })
  }
});
