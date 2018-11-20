import {createStackNavigator } from 'react-navigation';
import HomeSearch   from './HomeSearch';
import TabNavigator from './TabNavigator';
import HomePage     from './HomePage';
import Splash        from './Splash';

const RootNavigator = createStackNavigator ({
  Splash,
  TabNavigator,
  HomeSearch,
  HomePage,
},{
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
