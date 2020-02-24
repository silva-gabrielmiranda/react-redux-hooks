import { combineReducers } from 'redux';
import { namesList } from './nameList';
import { description } from './description';

// function namesApp(state, action) {
//     if (typeof state == undefined)
//         return initialState

//     return state
// }

const namesApp = combineReducers({
    namesList,
    description
});
export default namesApp;