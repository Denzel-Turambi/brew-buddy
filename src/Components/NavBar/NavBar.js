import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar({ search, searchFilter }) {
  return (
    <nav className='nav-section'>
      <NavLink to='/' style={{textDecoration:'none'}}>
        <h1 className='logo-title'>Brew Buddy</h1>
      </NavLink>
      <form>
      <input 
          id="search-input"
          type="text"
          placeholder="Search for beers..."
          name={search}
          value={search}
          onChange={searchFilter}
          />
      </form>
    </nav>
  );
};

export default NavBar;