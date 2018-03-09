import { combineReducers } from 'redux';

import nav from 'navigation/reducer';
import favorites from './favorites';

export default combineReducers({
  nav,
  favorites,
});