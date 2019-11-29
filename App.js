import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store';

import Ap from './src/index';

export default class App extends Component {
  render(){
    return(
      <Provider store={Store}>
        <Ap />
      </Provider>
    );
  }
}