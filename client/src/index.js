import React from 'react';
import  ReactDOM  from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';

import { reducers } from "./reducers";

import App from './App';

//creating a seperate store for all the diff diff components of the app
const store = configureStore({reducer: reducers},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'));