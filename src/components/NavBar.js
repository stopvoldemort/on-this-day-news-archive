import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css';


const NavBar = () => {
  return(
    <div>
      <Link to="/" className="navbarlink">
        Home
      </Link>
      <Link to="/about" className="navbarlink">
        About
      </Link>
    </div>
  )
}

export default NavBar
