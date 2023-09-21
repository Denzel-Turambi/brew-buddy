import { useState, useEffect } from 'react';
import './Focus.css'
import { useParams } from 'react-router-dom';
import { getSingleBeer } from '../ApiCalls';

function Focus() {
  const id = useParams()
  const [singleBeer, setSingleBeer] = useState([]);

  useEffect(() => {
    getSingleBeer(id.id)
    .then(data => setSingleBeer(data[0]))
  }, []);

  console.log(singleBeer)

  return
}

export default Focus;