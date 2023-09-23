function Error500({ error }) {
  if (error) {
    return (<h1>Oops! Something went wrong with the server! Please try again later.</h1>)
  }
}

export default Error500;