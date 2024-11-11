import "./../styles.css";
import { useState, useEffect } from "react";

// In React, Hooks are functions that let you use state and other React features in functional components, without the need for class components.
// Introduced in React 16.8, they allow for more reusable and manageable code by separating logic into independent functions.
const MoviesGrid = () => {
  const [movies, setMovies] = useState([]); //Returns an array with the current state and a function to update it. it manages state in functional components

  useEffect(() => {
    // Fetch movie data from an API or local storage
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []); // Empty array means it runs only once
  // useEffect Runs after every render by default, but can be controlled to run on specific dependencies.
  // Handles side effects, such as data fetching, subscriptions, and manual DOM manipulations.
  // Replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={"images/" + movie.image} alt={movie.title} />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <h3 className="movie-card-genre">{movie.genre}</h3>
            <h3 className="movie-card-rating">{movie.rating}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
