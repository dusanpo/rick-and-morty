import React, { useState, useEffect } from "react";
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
    <div>
      <h1>Rick and Morty</h1>
      <div>
        {characters.map(character =>(
          <article key = {character.id}>
           <h2>{character.name}</h2>
           <img src = {character.image} alt = "" />
          </article>
        ))}
      </div>

    </div>
  );
}

export default Home;
