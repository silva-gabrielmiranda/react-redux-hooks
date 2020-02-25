import React from 'react';
import {useSelector} from 'react-redux';

function Header() {
    const { title } = useSelector(state => state.description.title)
    return (
        <div className="App">
            <h1>{title}</h1>
        </div>
    );
}

export default Header;
