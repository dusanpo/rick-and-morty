import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://rickandmortyapi.com/api/character"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       console.log(data.results);
  //       setAllCharacters(data.results);
  //       setCharacters(data.results);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchCharacters();
  // }, []);

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchCharacters = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setAllCharacters(_characters => {
        return [..._characters, ...data.results];
      });

      setCharacters(_characters => {
        return [..._characters, ...data.results];
      });

      if (data.info && data.info.next) {
        fetchCharacters(data.info.next);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const filterCards = event => {
    //console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredCharacters = allCharacters.filter(searchCharacter =>
      `${searchCharacter.name}`.toLocaleLowerCase().includes(value.trim())
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Rick and Morty</h1>
      <SearchBar filterCards={filterCards} />
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
      {characters.length ? (
        characters.character
      ) : (
        <h1 className="display-text">No characters found!</h1>
      )}
    </div>
  );
}

export default Home;
