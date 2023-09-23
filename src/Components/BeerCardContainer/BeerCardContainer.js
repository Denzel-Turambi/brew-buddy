import './BeerCardContainer.css';
import BeerCard from '../BeerCard/BeerCard';
import PropTypes from 'prop-types';

function BeerCardContainer({ beers, search, filter }) {
  let allBeers = [];
  let filtered = [];

  filtered = search ? filter.map(filteredBeer => {
    return (
      <BeerCard
        name={filteredBeer.name}
        id={filteredBeer.id}
        key={filteredBeer.id}
        img={filteredBeer.image_url}
      />
    )
  }) : (
    allBeers = beers.map(beer => {
      return (
        <BeerCard
          name={beer.name}
          id={beer.id}
          key={beer.id}
          img={beer.image_url}
        />
      )
    })
  )

  return (
    <div className='beer-container'>
      {search ? filtered : allBeers}
    </div>
  )
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
  filter: PropTypes.string.isRequired,
}