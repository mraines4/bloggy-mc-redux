import { ACTION_CREATE_POST } from "../actions"; 

// a reducer is a function that accepts the current state 
// and an action and then calculates/returns the next new version of state
export default function posts(state={}, action={type: ''}) {
    switch (action.type) {
        case ACTION_CREATE_POST:
        console.log('looks like you want to create a post - clippy');
            break; 
        default:
            return state
    }
}