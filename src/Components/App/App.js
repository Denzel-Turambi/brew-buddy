import { useEffect, useState } from 'react';
import './App.css';
import { getBeers } from '../ApiCalls';
import NavBar from '../NavBar/NavBar';
import BeerCardContainer from '../BeerCardContainer/BeerCardContainer'

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
    <BeerCardContainer beers={beers}/>
    </div>
  );
}

export default App;
