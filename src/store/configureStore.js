import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactionReducer from '../reducers/transactions';

// Store to inaczej core aplikacji, przez który przesyłane są dane do wszystkich komponentów
export default () => {
  const store = createStore(
    combineReducers({
      transaction: transactionReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
