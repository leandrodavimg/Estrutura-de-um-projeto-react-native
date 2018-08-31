import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import createNavigator from 'routes';
import store from 'store';

const App = () => {
  const Routes = createNavigator();
  return (<Provider store={store}><Routes /></Provider>);
};

export default App;
