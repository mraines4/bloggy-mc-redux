import { combineReducers, createStore } from 'redux';

import posts from './reducers/posts';

const frequency = 2000;
const ls_key = 'bloggy-mc-redux'

const rootReducer = combineReducers({
    posts // same word, omit the colon
})

// check localstorage for any previously saved state
// if there, pass in as second argument
let initialState = JSON.parse(localStorage.getItem(ls_key)) || {} ;

const store = createStore(
    rootReducer, initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setInterval(() => {
    const state = store.getState()
    localStorage.setItem(ls_key, JSON.stringify(state))
},frequency)


export default store;