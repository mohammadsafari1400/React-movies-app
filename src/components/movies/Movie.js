import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  return (
    <li className="movie">
      <img src={movie.Poster} alt="film" />
      <div className="text">
        <h4>{movie.Title}</h4>
        <Link to={`/single-post/${movie.imdbID}`}>more...</Link>
      </div>
    </li>
  );
};

export default Movie;
