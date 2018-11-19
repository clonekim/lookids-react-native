import {createStackNavigator } from 'react-navigation';
import HomeSearch   from './HomeSearch';
import TabNavigator from './TabNavigator';


const RootNavigator = createStackNavigator ({
  TabNavigator,
  HomeSearch,
},{
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
