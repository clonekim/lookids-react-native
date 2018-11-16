import { NavigationActions } from 'react-navigation';

let navigator;

export default {
  setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
  },

  navigate(routeName, params) {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
  
}
