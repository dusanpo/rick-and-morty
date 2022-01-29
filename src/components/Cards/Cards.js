import React from "react";
import "./Cards.css";

function Cards({ character }) {
  return (
    <div className="cards">
      <div className="card-title">{character.name}</div>
      <div className="card-body">
          <p>Location: <span className="location">{character.location.name}</span></p>
        <div className="card-img">
          <img src={character.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
