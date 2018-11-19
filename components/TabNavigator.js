import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import HomeBoard          from './HomeBoard';
import ItemBoard          from './ItemBoard';
import FavoriteBoard      from './FavoriteBoard';


// 탭기반 화면들
const TabNavigator = createMaterialTopTabNavigator ({
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

export default TabNavigator;
