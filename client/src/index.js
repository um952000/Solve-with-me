import React from "react";
//ReactDOM is used to render things
import ReactDOM from "react-dom";

//importing provider and other react redux functionality
import { Provider } from 'react-redux';

//import {applyMiddleware, compass, compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import thunk from 'react-thunk';

//importing reducers
import reducers from './reducers';

import App from './App';

//creating a store using redux capabilities...............
const store = configureStore({reducer: reducers},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
     <Provider store={store}>
    <App />
    </Provider>, 
document.getElementById('root'));