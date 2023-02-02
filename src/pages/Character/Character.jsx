import axios from "axios";
import "./Character.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "./components/Detail";
const detailsTitle=["casa","alianzas","apariciones","padre","descendientes","titulos"];

let details=[{
  title:"casa",
  img:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7b/House-Forrester-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161231145807",
  items:[],
}];
let fValores=[];

export default function Character() {
  const name = useParams().name;

  console.log(name);

  // variable de estado
  const [character, setCharacter] = useState({});

  const getCharacter = async () => {
    const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);
    console.log(res.data);
    setCharacter(res.data);
    setDetails(res.data);
    console.log("detalles",details);
  };

  const setDetails=(fData)=>{
    // titulos
    console.log(fData.titles);
    let valores=fData.titles;
    fValores = [...valores];

    details = [...details,{title:'Titulos',img:"",items:[...valores]}]; 
    // this.details = [...this.details,{title:'Titulos',img:"",items:[...valores]}];    
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="character">
    
      <div className="character__name">        
        {character.actor}
      </div>

      <div className="character__img">
        <img
          className="character__img"
          src={character.image}
          alt={character.name}
        ></img>
      </div>
      <div className="character__name">
        {character.name}
      </div>
      <div className="character__details">    
        {detailsTitle.map((title,index) => <Detail key={index} titleX={title} />)}
      </div>
      
    </div>
  );
}
