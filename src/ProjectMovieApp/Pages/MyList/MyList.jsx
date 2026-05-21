import React, {useEffect,useState} from "react";

import {Link} from "react-router-dom";

import {fetchMyList,removeFromMyList} from "../../api/axios";

import "./MyList.scss";

const MyList = () => {


  const [movies, setMovies] =
    useState([]);

  useEffect(() => {

    const storedMovies =
      fetchMyList();

    setMovies(storedMovies);

  }, []);

  const handleRemove = (
    movieId
  ) => {

    removeFromMyList(movieId);

    const updatedMovies =
      fetchMyList();

    setMovies(updatedMovies);
  };

  return (

    <div className="mylist-page">

      <h1>
        ❤️ My List
      </h1>

      {movies.length === 0 ? (

        <h2 className="empty-text">
          No Movies Added
        </h2>

      ) : (

        <div className="movie-grid">

          {movies.map((movie) => (

            <div
              className="movie-card"
              key={movie.id}
            >

              <Link
                to={`/movie/${movie.id}`}
              >

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

              </Link>

              <h3>
                {movie.title}
              </h3>

              <button
                onClick={() =>
                  handleRemove(movie.id)
                }
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default MyList;