import React, {useEffect} from "react";

import {useParams,useNavigate} from "react-router-dom";

import {usePersonDetails} from "../../Context/PersonDetailsContext";

import "./PersonDetails.scss";

const PersonDetails = () => {

  const { id } = useParams();

  const navigate =
    useNavigate();

  const {
    personDetails,
    personMovies,
    loading,
    getPersonDetails,
  } = usePersonDetails();

  useEffect(() => {

    getPersonDetails(id);

  }, [id]);

  if (loading) {

    return <h1>Loading...</h1>;
  }

  return (
    <div className="person-details">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="person-container">

        <img
          src={`https://image.tmdb.org/t/p/w500${personDetails?.profile_path}`}
          alt={personDetails?.name}
        />

        <div className="person-info">

          <h1>
            {personDetails?.name}
          </h1>

          <p>
            <strong>
              Birthday :
            </strong>

            {" "}
            {personDetails?.birthday}
          </p>

          <p>
            <strong>
              Place of Birth :
            </strong>

            {" "}
            {
              personDetails?.place_of_birth
            }
          </p>

          <p>
            <strong>
              Biography :
            </strong>
          </p>

          <p>
            {personDetails?.biography}
          </p>

        </div>

      </div>

      <div className="movies-section">

        <h2>Known Movies</h2>

        <div className="movie-list">

          {personMovies?.map(
            (movie) => (

              <div
                className="movie-card"
                key={movie.id}
              >

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <p>
                  {movie.title}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default PersonDetails;