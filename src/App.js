import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./components/Form";
import Home from "./components/Home";
import List from "./components/List";
import Navigation from "./components/Navigation";

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  const addMovie = movie => {
    setMovies([...movies, movie])
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<List movies={ movies } />} />
        <Route path="/movies/new" element={<Form addMovie={ addMovie } />} />
      </Routes>
    </Router>
  );
}

export default App;
