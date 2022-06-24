import { Route, HashRouter as Router, Link } from 'react-router-dom'

function Header() {
    return(
        <div>
        <header className='App-header'>
          <h1 className='App-title'>Search For Some Gifs!</h1>
          <h4></h4>
        </header>
        <ul>
            <li>
                <Link to="/">SEARCH</Link>
            </li>
            <li>
                <Link to="/favorites">FAVORITES</Link>
            </li>
        </ul>
        </div>
    )
}

export default Header;