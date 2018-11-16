import React from 'react';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers);

export default function Stores (props ) {
  return (
    <Provider store={ store }>
      <App/>
    </Provider>
  );
}
