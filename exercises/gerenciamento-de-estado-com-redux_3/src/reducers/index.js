import { combineReducers } from 'redux';

import clientRegister from './clientRegister';

export default combineReducers({
  clients: clientRegister,
});
