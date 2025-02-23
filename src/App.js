import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDescription from "./components/MovieDescription";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "inception.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "A journey through space and time",
      posterURL: "interstellar.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
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
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} />
                <MovieList movies={filteredMovies} addMovie={addMovie} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
