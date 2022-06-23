import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>
  );
}

export default App;
