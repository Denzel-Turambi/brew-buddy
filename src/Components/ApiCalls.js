function getBeers() {
  return fetch('https://api.punkapi.com/v2/beers')
  .then(res => {
    if(!res.ok){
      throw new Error (`${res.status}`)
    }
    return res.json()
  })
}

export {
  getBeers
}