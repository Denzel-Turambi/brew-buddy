import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

function NavBar({ search, searchFilter }) {
  const location = useLocation();

  return (
    <nav className='nav-section'>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h1 className='logo-title'>Brew Buddy</h1>
      </NavLink>
      {location.pathname === '/' && (
        <form className="search-bar">
        <input
          id="search-input"
          className="search-input"
          type="text"
          placeholder="Search for beers..."
          name={search}
          value={search}
          onChange={searchFilter}
          />
      </form>
          )}
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  search: PropTypes.string.isRequired,
  searchFilter: PropTypes.func.isRequired,
}