import { ADD_NAME } from '../actions/actionTypes';

export function namesList(state = [], action) {
    switch (action.type) {
        case ADD_NAME:
            return [...state, { names: action.text }]
        default:
            return state;
    }
}