import React from "react";
import MoreInfo from "../MoreInfo/MoreInfo";
import "./Cards.css";

function Cards({ character }) {
  return (
    <div className="cards">
      <div className="card-title">{character.name}</div>
      <div className="card-body">
        <p>
          Location: <span className="location">{character.location.name}</span>
        </p>
        <MoreInfo type="Specie" info={character.species} />
        <MoreInfo type="Gender" info={character.gender} />
        <div className="card-img">
          <img src={character.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
