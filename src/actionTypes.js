export const ADD_NAME = 'ADD_NAME';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_DATA = 'CHANGE_DATA';

export function addName(text) {
    return {
        type: ADD_NAME,
        text
    };
}
export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        title
    };
}
export function changeData(data) {
    return {
        type: CHANGE_DATA,
        data
    };
}