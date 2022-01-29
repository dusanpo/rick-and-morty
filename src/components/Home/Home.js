import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./Home.css";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        //console.log(data);
        console.log(data.results);
        
        setCharacters(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="header">Rick and Morty</h1>
      <div className="class-wrapper">
        {characters.map(character =>(
          <article className="article" key = {character.id}>
          <Cards character = {character} />
          </article>
        ))}
      </div>

    </div>
  );
}

export default Home;
