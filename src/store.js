import { combineReducers, createStore } from 'redux';

import posts from './reducers/posts';

const rootReducer = combineReducers({
    posts // same word, omit the colon
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;