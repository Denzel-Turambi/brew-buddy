function BeerCard({ name, id }) {
  return (
    <div id={id}>
      <h1>{name}</h1>
    </div>
  )
}

export default BeerCard;