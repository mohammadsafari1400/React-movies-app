import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";
import Header from "./components/UI/Header";
import MoviesState from "./context/MoviesState";
const App = () => {
  return (
    <Router>
      <MoviesState>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/single-post/:imdbID" exact>
            <SinglePost />
          </Route>
        </Switch>
      </MoviesState>
    </Router>
  );
};

export default App;
