function BeerCard({ name, id, img }) {
  return (
    <div id={id}>
      <img src={img} alt='beer image'/>
      <h1>{name}</h1>
    </div>
  )
}

export default BeerCard;