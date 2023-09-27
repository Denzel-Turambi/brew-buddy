import React from 'react';
import './BeerCardContainer.css';
import BeerCard from '../BeerCard/BeerCard';
import PropTypes from 'prop-types';

function BeerCardContainer({ beers, search, filter }) {
  const filteredBeers = search ? filter : beers;

  const beerCards = filteredBeers.map(filteredBeer => (
    <BeerCard
      name={filteredBeer.name}
      id={filteredBeer.id}
      key={filteredBeer.id}
      img={filteredBeer.image_url}
    />
  ));

  return (
    <div className='beer-container'>
      {filteredBeers.length > 0 ? (
        beerCards
      ) : (
        <h2 className='no-results-message'>Sorry, no search results</h2>
      )}
    </div>
  );
}

export default BeerCardContainer;
BeerCardContainer.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    })
  ),
  search: PropTypes.string.isRequired,
  filter: PropTypes.array.isRequired
}