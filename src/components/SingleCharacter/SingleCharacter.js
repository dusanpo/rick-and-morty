import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./SingleCharacter.css";

function SingleCharacter() {
  let location = useLocation();
  let history = useHistory();
  const { name, image, status } = location.state.character;
  return (
    <div className="container">
      <article className="container-article">
        <h1 className="name">{name}</h1>
        <img src={image} alt="" />
        <p className="paragraph">
          Status: &nbsp;
          {(() =>{
          if(status === "Dead"){
              return (
                  <span className="dead">
                      {status}
                  </span>
              );
          }else if(status === "Alive"){
              return(
                  <span className="alive">
                      {status}
                  </span>
              );
          }else{
              return(
                  <span className="unknown">
                      {status}
                  </span>
              );
          }
          }) ()}
        </p>
        <button className="button" onClick = {() => history.push("/")}>GO BACK</button>
      </article>
    </div>
  );
}

export default SingleCharacter;
