import './BeerCardContainer.css'
import BeerCard from '../BeerCard/BeerCard'

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