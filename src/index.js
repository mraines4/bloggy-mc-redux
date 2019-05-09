import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
window.store = store

const frequency = 2000;
const ls_key = 'bloggy-mc-redux'
let saveInterval = setInterval(() => {
    const state = store.getState()
    localStorage.setItem(ls_key, JSON.stringify(state))
},frequency)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
