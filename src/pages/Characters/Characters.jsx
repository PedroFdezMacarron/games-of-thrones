import SimpleBar from "simplebar-react";
import "simplebar-react/dist/";
import "simplebar-react/dist/simplebar.min.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.scss";
import { SearcherCharacters } from "../../components/SearcherCharacters/SearcherCharacters";
import Loading from "../../components/Loading/Loading";
import { trackPromise } from "react-promise-tracker";
import CharacterGallery from "../../components/CharacterGallery/CharacterGallery";
import Navbar from "../../components/Navbar/Navbar";
const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersView, setCharactersView] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await axios.get(
        "https://api.got.show/api/show/characters/"
      );
      console.log(characters.data);
      setCharacters(characters.data);
      setCharactersView(characters.data);
    };

    trackPromise(getCharacters());
  }, []);

  const searchCharacters = (name) => {
    if (name.length < 1) {
      return setCharactersView(characters);
    }
    console.log(name);
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filtered);
    setCharactersView(filtered);
  };
  return (
    <>
      <SearcherCharacters setSearch={searchCharacters} />
      <main className="home__container noimage__container">
        <SimpleBar autoHide={false} className="c-scroll-characters">
          <div className="character-gallery__container">
            {charactersView.length < 1 ? (
              <Loading />
            ) : (
              charactersView.map((character) => (
                <CharacterGallery
                  characters={character}
                  key={character._id}
                  character={character}
                />
              ))
            )}
          </div>
        </SimpleBar>
      </main>
      <Navbar></Navbar>
    </>
  );
};

export default CharactersPage;
