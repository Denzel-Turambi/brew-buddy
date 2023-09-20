// import BeerCardContainer from './BeerCardContainer.css'
import BeerCard from '../BeerCard/BeerCard'

function BeerCardContainer({beers}) {
  const beerCards = beers.map(beer => {
    return (
      <BeerCard 
        name={beer.name}
        id={beer.id}
        key={beer.id}
        img={beer.image_url}
      />
    )
  })

  return(
  <div>
    {beerCards}
  </div>
 )
}

export default BeerCardContainer;