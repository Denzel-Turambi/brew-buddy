import { useState, useEffect } from 'react';
import './Focus.css'
import { useParams } from 'react-router-dom';
import { getSingleBeer } from '../ApiCalls';

function Focus() {
  const id = useParams();
  const [singleBeer, setSingleBeer] = useState({});

  useEffect(() => {
    getSingleBeer(id.id)
    .then(data => setSingleBeer(data[0]))
  }, []);

  console.log(singleBeer)

  return(
    <div className="single-beer-container">
      <div className="single-beer-icon">
        <img className="single-beer-img" src={singleBeer.image_url}/>
      </div>
      <div className="single-beer-description">
        <h1>{singleBeer.name}</h1>
        <h2>{singleBeer.tagline}</h2>
        <p><strong>First Brewed: </strong>{singleBeer.first_brewed}</p>
        <p><strong>Description: </strong>{singleBeer.description}</p>
        <p><strong>Alcohol by volume (ABV): </strong>{singleBeer.abv}</p>
        <p><strong>Food Pairings: </strong>{singleBeer.food_pairing}</p>
        <p><strong>Brewers Tips: </strong>{singleBeer.brewers_tips}</p>
      </div>
    </div>
  )
}

export default Focus;