import React, { useState } from 'react';
import Header from './components/header/index';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from './actions/actionTypes'

function App() {
    // Prepara o uso das action (caso seja necessário alterações)
    const dispatch = useDispatch();

    // Inicia o State da aplicação (Neste caso apenas o titulo)
    const [newTitle, useNewTitle] = useState("");

    // Busca o title que está salvo no Store do redux
    const { title } = useSelector(state => state.description);

    // Função que faz o uso da action de alteração de titulo
    function setTitle() {
        dispatch(changeTitle(newTitle));
        console.log("Titulo antigo: ", title);
        console.log("Titulo novo: ", newTitle);
    }

    // Adiciona o valor do input dentro do State.
    const HandleInput = (e) => useNewTitle(e.target.value)

    return (
        <div className="App">
            <Header></Header>
            <h1>{title}</h1>
            <input type="text" onChange={HandleInput}></input>
            <button onClick={setTitle}>Clique para testar</button>
        </div>
    );
    
}

export default App;