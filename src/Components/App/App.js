import { useEffect, useState } from 'react';
import './App.css';
import { getBeers } from '../ApiCalls';
import NavBar from '../NavBar/NavBar';
import BeerCardContainer from '../BeerCardContainer/BeerCardContainer';
import { Routes, Route } from 'react-router-dom';
import Focus from '../Focus/Focus';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers()
    .then(data => setBeers(data))
  }, []);

  console.log(beers)

  return (
    <div>
    <NavBar />
    <Routes>
      <Route path='/' element={
        <BeerCardContainer beers={beers}/>
      } />
      <Route path='/:id' element={
        <Focus />
      } />
    </Routes>
    </div>
  );
}

export default App;
