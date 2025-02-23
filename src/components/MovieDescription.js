import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies ? movies.find((movie) => movie.title === title) : null;

  return (
    <div className="movie-description">
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <iframe
            width="560"
            height="315"
            src={movie.trailerURL}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <p>Movie not found</p>
      )}
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default MovieDescription;
