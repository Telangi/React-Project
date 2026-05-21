import React from "react";

import "./TvShows.scss";

const TvShows = ({
  popularMovies,
}) => {

  return (

    <div className="tvshow">

      <h1 className="title">
        Popular TV Shows
      </h1>

      <div className="show-container">

        {popularMovies.map(
          (show) => (

            <div
              className="card"
              key={show.id}
            >

              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />

              <div className="card-body">

                <h3>
                  {show.name}
                </h3>

                <p>
                  ⭐ {show.vote_average}
                </p>

                <p>
                  {show.first_air_date}
                </p>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default TvShows;