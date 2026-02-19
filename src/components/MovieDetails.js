import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const movies = [
  { id: 1, name: "Inception" },
  { id: 2, name: "Interstellar" },
  { id: 3, name: "Avengers" },
  { id: 4, name: "Titanic" }
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id == id);

  return (
    <div className="page">
      <h1>{movie.name}</h1>
      <p>Movie details information goes here.</p>

      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;

