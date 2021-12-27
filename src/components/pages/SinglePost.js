import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesContext from "../../context/moviesContext";
const SinglePost = () => {
  const { movie, getMovie, loading } = useContext(moviesContext);
  const { imdbID } = useParams();
  useEffect(() => {
    getMovie(imdbID);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!loading ? (
        <ul className="single-post">
          <div className="pic">
            <img src={movie?.Poster} alt="film" />
          </div>
          <div className="info">
            <li>
              <span>Film :</span>
              <span>{movie?.Title}</span>
            </li>
            <li>
              <span>Director :</span>
              <span>{movie?.Director}</span>
            </li>
            <li>
              <span>Writer :</span>
              <span>{movie?.Writer}</span>
            </li>
            <li>
              <span>Actors :</span>
              <span>{movie?.Actors}</span>
            </li>
            <li>
              <span>Genre :</span>
              <span>{movie?.Genre}</span>
            </li>
            <li>
              <span>Language :</span>
              <span>{movie?.Language}</span>
            </li>
            <li>
              <span>Country :</span>
              <span>{movie?.Country}</span>
            </li>
            <li>
              <span>Awards :</span>
              <span>{movie?.Awards}</span>
            </li>
            <li>
              <span>Year :</span>
              <span>{movie?.Year}</span>
            </li>
            <li>
              <span>Released :</span>
              <span>{movie?.Released}</span>
            </li>
            <li>
              <span>Runtime :</span>
              <span>{movie?.Runtime}</span>
            </li>
            <li>
              <span>Ratings : </span>
              {movie?.Ratings?.map((Rating, index) => (
                <p key={index}>
                  {Rating.Source} : {Rating.Value}
                </p>
              ))}
            </li>
          </div>
        </ul>
      ) : (
        <p className="loding">Loding...</p>
      )}
    </>
  );
};

export default SinglePost;
