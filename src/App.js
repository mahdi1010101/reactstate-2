import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "inception.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time",
      posterURL: "interstellar.jpg",
      rating: 4,
    },
    // ...other movies
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div className="App">
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} addMovie={addMovie} />
    </div>
  );
}

export default App;
