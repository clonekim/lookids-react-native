import React from 'react';
import { Provider }       from 'react-redux';
import RootNavigator      from './components/RootNavigator';
import NavigationService  from './navigationService';
import configureStore     from './store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
      </Provider>
    );
  }
}
