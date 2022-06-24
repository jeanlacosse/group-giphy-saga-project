import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import Search from '../Search/Search';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route>
          <Header />
        </Route>
        <Route>
          <Search path="/" />
        </Route>
        <Route>
          <Favorites path= "/favorites" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
