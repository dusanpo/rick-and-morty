import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
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
      <h1 className="title">Rick and Morty</h1>
      <SearchBar />
      <div className="class-wrapper">
        {characters.map(character => (
          <article className="article" key={character.id}>
            <Link
              className="link"
              to={{
                pathname: `/profile/${character.id}`,
                state: { character },
              }}
            >
              <Cards character={character} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
