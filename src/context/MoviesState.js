import { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
const reducer = (state, action) => {
  switch (action.type) {
    case "search-movies":
      return { ...state, movies: action.payload, loading: false };
    case "get-movie":
      return { ...state, movie: action.payload, loading: false };
    case "set-loading":
      return { ...state, loading: true };

    default:
      return state;
  }
};
const MoviesState = ({ children }) => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // search movies
  const serachMovies = async (searchMovies) => {
    setLoading();
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchMovies}&apikey=a9118a3a`
    );
    dispatch({ type: "search-movies", payload: data.Search });
  };
  // get movie
  const getMovie = async (movieName) => {
    setLoading();
    const { data } = await axios.get(`
      http://www.omdbapi.com/?i=${movieName}&plot=full&apikey=a9118a3a
    `);
    dispatch({ type: "get-movie", payload: data });
  };
  // setLoading
  const setLoading = () => {
    dispatch({ type: "set-loading" });
  };

  return (
    <MoviesContext.Provider value={{ ...state, serachMovies, getMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
