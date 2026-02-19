import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const movies = [
  { id: 1, title: "Inception", image: "/inception.jpg" },
  { id: 2, title: "Interstellar", image: "/interstellar.jpg" },
  { id: 3, title: "Avengers", image: "/avengers.jpg" },
  { id: 4, title: "Titanic", image: "/titanic.jpg" }
];

function MovieList() {
  return (
    <div className="movie-container">
      <h1>Movie List</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.image}
              alt={movie.title}
              className="movie-img"
            />

            <h3>{movie.title}</h3>

            <Link to={`/movie/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
