import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import UmsRouter from './routers/UmsRouter';
import configureStore from './store/configureStore';
import firebase from './firebase/firebase';
import { fetchSetUser } from './actions/userGenerator';

const store = configureStore()

// connect store with every components - allow download the data
const jsx = (
  <Provider store={store}>
    <UmsRouter />
  </Provider>
);

// Run app ID from HTML code
ReactDOM.render(<h3>Loading...</h3>, document.getElementById('app'));

store.dispatch(fetchSetUser()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})
