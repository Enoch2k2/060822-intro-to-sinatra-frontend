import React from 'react'
import Card from './Card'

const List = ({ movies }) => {

  const movieCards = movies.map(movie => <Card key={ movie.id } movie={ movie } />)

  return (
    <div>
      <h2>List Movies</h2>
      <ul>
        { movieCards }
      </ul>
    </div>
  )
}

export default List