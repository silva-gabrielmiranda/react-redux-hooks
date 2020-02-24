import { combineReducers } from 'redux';
import { ADD_NAME, CHANGE_DATA, CHANGE_TITLE} from './actionTypes';


// function namesApp(state, action) {
//     if (typeof state == undefined)
//         return initialState

//     return state
// }

function namesList(state = [], action) {
    switch (action.type) {
        case ADD_NAME:
            return [...state, { names: action.text }]
        default:
            return state;
    }
}

function description(state = {}, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return Object.assign({}, state, { title: action.title });
        case CHANGE_DATA:
            return Object.assign({}, state, { data: action.data });
        default:
            return state;
    }
}

const namesApp = combineReducers({
    namesList,
    description
});
export default namesApp;