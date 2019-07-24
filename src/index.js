import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './2.reducer'

const globalStore=createStore(reducers)
ReactDOM.render(<Provider store={globalStore}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
