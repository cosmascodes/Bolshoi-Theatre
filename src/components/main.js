import React, { useEffect } from 'react';
import Header from './header/header';
import Cards from './cards/cards';

function Main() {
    useEffect(()=>window.scrollTo(0,0))
    return (
        <div className="App">           
            <Header/>
            <Cards/>
        </div>
    );
}

export default Main;