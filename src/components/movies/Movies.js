import { useContext } from "react";
import moviesContext from "../../context/moviesContext";
import Movie from "./Movie";
const Movies = () => {
  const { movies, loading } = useContext(moviesContext);
  return (
    <>
      {!loading ? (
        movies?.length > 0 ? (
          <ul className="movies">
            {movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </ul>
        ) : (
          <p className="error">This movie does not exist !</p>
        )
      ) : (
        <p className="loding">Loding...</p>
      )}
    </>
  );
};

export default Movies;
