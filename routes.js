import { createStackNavigator } from 'react-navigation';

import Login from 'pages/login';
import Forgotpass from 'pages/forgotpass';
import NewUser from 'pages/newuser';

const Logar = createStackNavigator({
  Login: { screen: Login },
  Forgotpass: { screen: Forgotpass },
  NewUser: { screen: NewUser },
}, {
  initialRouteName: 'Login',
  // headerMode: 'none',
});

const createNavigator = () => createStackNavigator({
  Logar: { screen: Logar },
}, {
  initialRouteName: 'Logar',
  headerMode: 'none',
});

export default createNavigator;