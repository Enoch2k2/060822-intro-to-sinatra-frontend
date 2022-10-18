import React from 'react'
import { useState } from 'react'

const Form = ({ addMovie }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:9292/movies', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    })
      .then(resp => resp.json())
      .then(data => addMovie(data))
  }

  return (
    <div>
      <h2>Create Movie</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={ title } onChange={ e => setTitle( e.target.value ) } />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" value={ description } onChange={ e => setDescription(e.target.value) } />
        </div>

        <input type="submit" value="Create Movie" />
      </form>
    </div>
  )
}

export default Form