import Header from "./components/Header";
import "./styles.css";
import "./App.css";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// In React, Hooks are functions that lets you to use state and other React features in functional components, without the need for class components.
// Introduced in React 16.8, they allow for more reusable and manageable code by separating logic into independent functions.
function App() {
  const [movies, setMovies] = useState([]); //Returns an array with the current state and a function to update it. it manages state in functional components
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    // Fetch movie data from an API or local storage
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []); // Empty array means it runs only once
  // useEffect Runs after every render by default, but can be controlled to run on specific dependencies.
  // Handles side effects, such as data fetching, subscriptions, and manual DOM manipulations.
  // Replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

  const toggleWatchList = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watch list</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchList={watchList}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
