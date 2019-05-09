import { ACTION_CREATE_POST, ACTION_DELETE_POST } from "../actions";
import {generateId} from '../utils'; 

// a reducer is a function that accepts the current state 
// and an action and then calculates/returns the next new version of state
export default function posts(state={}, action={type: ''}) {
    switch (action.type) {
        case ACTION_CREATE_POST:
            // console.log('looks like you want to create a post - clippy');
            const id = generateId()
            console.log(`id is ${id}`);
            const newState = {
                ...state,
                [id]: action.payload  // to use a variable as a key in an object literal, wrap the variable in squre brackets
            }
            return  newState
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state
            }
            delete deleteState[action.payload.id];
            return deleteState
        default:
            return state
    }
}