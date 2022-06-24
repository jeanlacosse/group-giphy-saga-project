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
<<<<<<< HEAD
        
          <Header />
        
        <Route path="/" exact>
          <Search  />
=======
          <Header />
        <Route path="/" exact>
          <Search />
>>>>>>> f8f39dd335bd5a9f96d5b6d03812848c5498c14c
        </Route>
        <Route path= "/favorites" exact>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
