import { useState, useEffect } from 'react';
import './Focus.css'
import { useParams } from 'react-router-dom';
import { getSingleBeer } from '../ApiCalls';
import Error404 from '../ErrorHandling/Error404';

function Focus() {
  const id = useParams();
  const [singleBeer, setSingleBeer] = useState({});
  const [singleBeerError, setSingleBeerError] = useState("");

  useEffect(() => {
    getSingleBeer(id.id)
      .then((data) => setSingleBeer(data[0]))
      .catch((error) => {
        setSingleBeerError(error)
      });
  }, [id.id]);

  console.log(singleBeer)
  if(singleBeerError){
    return (
      <Error404 />
    )
  } else {

    return(
      <div className="single-beer-container">
      <div className="single-beer-icon">
        <img className="single-beer-img" src={singleBeer.image_url}/>
      </div>
      <div className="single-beer-description">
        <h1 className="dscrpt-text">{singleBeer.name}</h1>
        <h2 className="dscrpt-text">{singleBeer.tagline}</h2>
        <p className="dscrpt-text"><strong>First Brewed: </strong>{singleBeer.first_brewed}</p>
        <p className="dscrpt-text"><strong>Description: </strong>{singleBeer.description}</p>
        <p className="dscrpt-text"><strong>Alcohol by volume (ABV): </strong>{singleBeer.abv}</p>
        <p className="dscrpt-text"><strong>Food Pairings: </strong>{singleBeer.food_pairing}</p>
        <p className="dscrpt-text"><strong>Brewers Tips: </strong>{singleBeer.brewers_tips}</p>
      </div>
    </div>
  )
}
}

export default Focus;