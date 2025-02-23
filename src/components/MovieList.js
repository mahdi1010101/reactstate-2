import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleChange}
          placeholder="Poster URL"
          required
        />
        <input
          type="number"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
          min="0"
          max="5"
        />
        <button type="submit">Add Movie</button>
      </form>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <Link to={`/movie/${movie.title}`}>
              <img src={movie.posterURL} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
