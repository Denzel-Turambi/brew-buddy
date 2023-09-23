function getBeers() {
  return fetch('https://api.punkapi.com/v2/beers')
  .then(res => {
    if(!res.ok){
      throw new Error (`${res.status}`)
    }
    return res.json()
  })
}

function getSingleBeer(id) {
  return fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching single beer:', error);
      throw error;
    });
}

export {
  getBeers,
  getSingleBeer
}