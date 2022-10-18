import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">List Movies</Link></li>
        <li><Link to="/movies/new">Create Movie</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation