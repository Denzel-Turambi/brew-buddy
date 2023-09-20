import { useEffect, useState } from 'react';
import './App.css';
import { getBeers } from '../ApiCalls';

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    getBeers()
    .then(data => setBeers(data))
  }, []);

  console.log(beers)

  return (
    <h1>Brew Buddy</h1>
  );
}

export default App;
