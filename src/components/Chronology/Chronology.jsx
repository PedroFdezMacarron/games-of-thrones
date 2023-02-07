/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'; //npm i classnames
import SimpleBar from 'simplebar-react';
import './Chronology.scss';
import flecha from '../../img/flecha.png'; //descargar la flecha del zepelin

const Chrono = ({ character, index }) => (

  <div className={classNames({
    chrono: true,
    left: index % 2 === 0,
    right: index % 2 !== 0,
  })}> 
    <span>{character.age.age}</span>
    <h2>{character.age.name}</h2>
  
    <Link to={`/character/${character.age.name}`}> 
      <img src={character.image} alt="" />
    </Link>
  </div>
);

function Chronology(props) {
const [isFlip, setFlip] = useState(false);
const [characters, setCharacters] = useState(props.characters);

const orderCharactersAsc = () => setCharacters([...characters.sort((a, b) => a.age.age - b.age.age)]);

const toggleOrder = () => {
    setCharacters([...characters.reverse()]);
        setFlip(!isFlip);
};

useEffect(() => {
    orderCharactersAsc();
        setCharacters([...characters.filter(character => character.age.age < 200)]);
}, []);

return (
    <>
        <div className="c-toggle" onClick={toggleOrder}>{characters[0].age.age}</div>
            <img src={flecha} alt="" className={isFlip ? 'flip' : ''} />
            <SimpleBar autoHide={false} className="c-scroll" style={{ height: '68vh' }}>
        <div className="c-chrono">
            {characters.map((character, index) => (
            <Chrono character={character} index={index} key={character._id} />
            ))}
        </div>
            </SimpleBar>
    </>
    );
 }

export default Chronology;
