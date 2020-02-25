import { createStore } from 'redux';
import namesApp from './reducers/namesApp'

const store = createStore(namesApp);
console.log(store.getState());
export default store;