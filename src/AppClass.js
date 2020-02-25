import React, { useState, Component } from 'react';
import Header from './components/header/index';
import { connect } from 'react-redux';


/* import { addName, changeData, changeTitle } from './actions/actionTypes';
const store = createStore(namesApp);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addName('Gabriel'));
store.dispatch(addName('Lucas'));
store.dispatch(changeData('23/02/2020'));
store.dispatch(changeData('01/02/2020'));
store.dispatch(changeTitle('Lista de Nomes'));
store.dispatch(changeTitle('Lista de Nomes 2'));
console.log("getState()", store.getState());

unsubscribe(); */

class App extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <h1>{title}</h1>
        <Header></Header>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  title: store.description.title
});
export default connect(mapStateToProps)(App);