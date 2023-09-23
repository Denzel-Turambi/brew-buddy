import { useEffect, useState } from 'react';
import './App.css';
import { getBeers } from '../ApiCalls';
import NavBar from '../NavBar/NavBar';
import BeerCardContainer from '../BeerCardContainer/BeerCardContainer';
import { Routes, Route } from 'react-router-dom';
import Focus from '../Focus/Focus';
import Error500 from '../ErrorHandling/Error500';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getBeers()
    .then(data => setBeers(data))
    .catch(error => setError(error))
  }, []);

  useEffect(() => {
    const filteredBeers = beers.filter(beer => 
      beer.name.toLowerCase().includes(search)
      );
      console.log('Filtered Beers', filteredBeers)
      setFilter(filteredBeers)
    }, [beers, search])
    
  function searchFilter(event) {
    setSearchValue(event.target.value);
    const searchBeer = event.target.value.toLowerCase();
    setSearch(searchBeer);
  }

  return (
    <div>
    <NavBar search={search} searchFilter={searchFilter}/>
    <Error500 error={error}/>
    <Routes>
      <Route path='/' element={
        <BeerCardContainer beers={beers} search={search} filter={filter}/>
      } />
      <Route path='/:id' element={
        <Focus />
      } />
    </Routes>
    </div>
  );
}

export default App;
