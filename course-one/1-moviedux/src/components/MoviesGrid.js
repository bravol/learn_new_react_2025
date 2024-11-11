import "./../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

// In React, Hooks are functions that lets you to use state and other React features in functional components, without the need for class components.
// Introduced in React 16.8, they allow for more reusable and manageable code by separating logic into independent functions.
const MoviesGrid = () => {
  const [movies, setMovies] = useState([]); //Returns an array with the current state and a function to update it. it manages state in functional components
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    // Fetch movie data from an API or local storage
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []); // Empty array means it runs only once
  // useEffect Runs after every render by default, but can be controlled to run on specific dependencies.
  // Handles side effects, such as data fetching, subscriptions, and manual DOM manipulations.
  // Replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5;
      case "Bad":
        return movie.rating < 5;

      default:
        return false;
    }
  };
  //   render filtered movies
  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
  );
  return (
    <div>
      {/* search */}
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* filter bar */}
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
