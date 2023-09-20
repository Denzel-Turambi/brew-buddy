import { useEffect, useState } from 'react';
import './App.css';
import { getBeers } from '../ApiCalls';
import NavBar from '../NavBar/NavBar'

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
    
    </div>
  );
}

export default App;
