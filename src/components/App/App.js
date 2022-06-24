import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import Search from '../Search/Search';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
          <Header />
        <Route path="/" exact>
          <Search />
        </Route>
        <Route path= "/favorites" exact>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
