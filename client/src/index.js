import React from 'react';
import ReactDOM from 'react-dom';

//importing Provider to keep track of store

import { Provider } from 'react-redux';
// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers/index.js';

import App from './App';
import './index.css';

const store = configureStore({reducer: rootReducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

   ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
    );
   
  
   

