import {createStackNavigator } from 'react-navigation';
import HomeSearch        from './HomeSearch';
import TabNavigator      from './TabNavigator';
import HomePage          from './HomePage';
import ItemWebPage       from './ItemWebPage';
import ItemSearch        from './ItemSearch';
import FavoriteStoreEdit from './FavoriteStoreEdit';
import FavoriteItemEdit  from './FavoriteItemEdit';
import Splash            from './Splash';

const RootNavigator = createStackNavigator ({
  Splash,
  TabNavigator,
  HomeSearch,
  HomePage,
  ItemWebPage,
  ItemSearch,
  FavoriteStoreEdit,
  FavoriteItemEdit   
},{
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
