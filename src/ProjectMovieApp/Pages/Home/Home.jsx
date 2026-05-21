import React from "react";
import {
  Card,
  CardTitle,
  CardImage,
  CardRating,
  CardReleaseDate,
} from "../../Components/Layouts/Card/Card";

import { Link } from "react-router-dom";
import "./Home.scss";

const Home = ({ popularMovies }) => {
  return (
    <div className="movie-container">
      {popularMovies.map((movie) => (
        <Card key={movie.id}>

          {/* IMAGE */}
          <Link to={`/movie/${movie.id}`}>
            <CardImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </Link>

          {/* SEPARATE CONTENT BOX */}
          <div className="movie-info">
            <CardTitle title={movie.title} />

            <CardRating rating={movie.vote_average} />

            <CardReleaseDate releaseDate={movie.release_date} />
          </div>

        </Card>
      ))}
    </div>
  );
};

export default Home;