import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import groupReducer from '../reducers/groupReducer';

// Store is a core of this app that allows to send data to all components
export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      group: groupReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
