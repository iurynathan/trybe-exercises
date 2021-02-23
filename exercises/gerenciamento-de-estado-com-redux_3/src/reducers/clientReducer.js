import ADD_CLIENT_REGISTER from '../actions';

const INITIAL_STATE = {};

export default function clientRegister (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CLIENT_REGISTER:
      return state;
    default:
      return state;
  }
}
