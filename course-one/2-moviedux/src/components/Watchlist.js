import React from "react";
import "./../styles.css";
import MovieCard from "./MovieCard";

const Watchlist = ({ movies, toggleWatchList, watchList }) => {
  return (
    <div>
      <h1 className="title">Your Watch List</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const movie = movies.find((m) => m.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchList={toggleWatchList}
              isWatchListed={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
