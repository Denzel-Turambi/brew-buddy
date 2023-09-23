import { Link } from "react-router-dom";

function Error404() {

  return (
    <div>
      <h1>Oops! Looks like this page doesn't exist.</h1>
      <p>Please go back to home and try again.</p>
      <Link to={'/'} style={{ textDecoration: 'none' }}>Go Back Home</Link>
    </div>
  )

}

export default Error404;