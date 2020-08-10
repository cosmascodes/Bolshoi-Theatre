import React, { useEffect } from 'react';
import Main from './components/main';
import PlayContexts from './contexts/playContexts';
import './App.css';
import Book from './Pages/book';
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {
  useEffect(()=>window.scrollTo(0,0))
  return (
    <PlayContexts>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/play/:id" exact component={Book}/>
        </Switch>
      </HashRouter>
    </PlayContexts>
  );
}

export default App;
