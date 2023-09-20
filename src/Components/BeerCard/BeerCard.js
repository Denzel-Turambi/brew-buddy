import './BeerCard.css'

function BeerCard({ name, id, img }) {
  return (
    <div className='card' id={id}>
      <img className ='beer-img' src={img} alt='beer image'/>
      <h1>{name}</h1>
    </div>
  )
}

export default BeerCard;