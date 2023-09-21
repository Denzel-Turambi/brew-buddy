import { Link } from 'react-router-dom';
import './BeerCard.css'

function BeerCard({ name, id, img }) {
  return (
    <Link to={`/${id}`} style={{textDecoration:'none'}}>
      <div className='card' id={id}>
        <img className ='beer-img' id={id} src={img} alt='beer image'/>
        <h1 id={id}>{name}</h1>
      </div>
    </Link>
  )
}

export default BeerCard;