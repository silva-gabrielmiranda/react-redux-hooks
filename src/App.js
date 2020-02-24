import React, { useState } from 'react';
import { createStore } from 'redux';
import Header from './components/header/index';
import namesApp from './namesApp';
import { addName, changeData, changeTitle } from './actionTypes'

const store = createStore(namesApp);

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addName('Gabriel'));
store.dispatch(addName('Lucas'));
store.dispatch(changeData('23/02/2020'));
store.dispatch(changeData('01/02/2020'));
store.dispatch(changeTitle('Lista de Nomes'));
store.dispatch(changeTitle('Lista de Nomes 2'));
console.log("getState()",store.getState());

unsubscribe();

function App() {
  const [name, setName] = useState('Gabriel');

  return (
    <div className="App">
      <h1>{name}</h1>
      <Header></Header>
    </div>
  );
}

export default App;
