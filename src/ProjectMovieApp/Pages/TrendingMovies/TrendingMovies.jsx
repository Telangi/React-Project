import React from "react";

import "./TrendingMovies.scss";

const TrendingMovies = ({
  popularMovies,
}) => {

  return (

    <div className="trending">

      <h1 className="title">
        Trending Movies
      </h1>

      <div className="movie-container">

        {popularMovies.map(
          (movie) => (

            <div
              className="card"
              key={movie.id}
            >

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="card-body">

                <h3>
                  {movie.title}
                </h3>

                <p>
                  ⭐ {movie.vote_average}
                </p>

                <p>
                  {movie.release_date}
                </p>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default TrendingMovies;