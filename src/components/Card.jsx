import React from 'react'

const Card = ({ movie }) => {
  return (
    <div>
      <h3>{ movie.title }</h3>
      <p>{ movie.description }</p>
    </div>
  )
}

export default Card