import { CHANGE_DATA, CHANGE_TITLE } from '../actions/actionTypes';

export function description(state = {}, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return Object.assign({}, state, { title: action.title });
        case CHANGE_DATA:
            return Object.assign({}, state, { data: action.data });
        default:
            return state;
    }
}