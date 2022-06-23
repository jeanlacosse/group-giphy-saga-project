import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Favorites />
    </div>
  );
}

export default App;
