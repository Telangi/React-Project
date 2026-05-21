import React from "react";
import { Link } from "react-router-dom";
import "./CastCard.scss";

const CastCard = ({ person }) => {
  return (
    <Link to={`/person/${person.id}`} className="cast-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
      />

      <div className="cast-content">
        <h3>{person.name}</h3>
        <p>{person.character}</p>
      </div>
    </Link>
  );
};

export default CastCard;