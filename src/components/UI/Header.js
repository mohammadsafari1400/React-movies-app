import { useState, useContext, useEffect } from "react";
import moviesContext from "../../context/moviesContext";
const Header = () => {
  const { serachMovies } = useContext(moviesContext);
  const [text, setText] = useState("the godfather");

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      console.log(text);
      serachMovies(text);
    }
    setText("");
  };
  useEffect(() => {
    serachMovies(text);
    setText("");
    // eslint-disable-next-line
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <i className="fas fa-video"></i>
      </div>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <input
          className="search-box"
          type="search"
          placeholder="search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Header;
