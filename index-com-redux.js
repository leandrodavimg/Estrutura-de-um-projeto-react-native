import './config/ReactotronConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createNavigator from 'routes';
import store from 'store';

export default class App extends Component {
  render() {
    const Routes = createNavigator();
    return (<Provider store={store}><Routes /></Provider>);
  }
}
