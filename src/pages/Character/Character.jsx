import axios from "axios";
import "./Character.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import { trackPromise } from "react-promise-tracker";
import Nada from "./components/Nada";
import Navbar from "../../components/Navbar/Navbar";

let details = [
  {
    title: "casa",
    img: "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7b/House-Forrester-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161231145807",
    items: [],
  },
];
let antName="";

export default function Character() {
  const name = useParams().name;  
  console.log('entra en character');
 
  const navigate = useNavigate();



  // variable de estado
  
  const [logo, setLogo] = useState("");  
  const [character, setCharacter] = useState({});
  

  // let fName="init";


  // función para recoger los detalles del personaje
  // tiene que traer el escudo de otra url que le pasa el nombre de la casa
  const getCharacter = async () => {    
    try {    


        // await axios.get(`https://api.got.show/api/show/houses/${name}`).then((res) => {
        //   setCharacter(res.data);
        //   // setDetails(res.data);
         
        //   fName="House Stark";
        //   return res.data;
        // }).then(async () => {
        //    axios.get(`https://api.got.show/api/book/houses/${fName}`).then((res2) => {
        //     setLogo(res2.data[0].image); // firstData is still an empty Object here for some reason                           
        //     // console.log(res2.data[0].image);
        //   });
        // });

      const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);  
      console.log(res.data);
      const res2 = await axios.get(`https://api.got.show/api/show/houses/${res.data.house}`);  
      console.log(res2.data);
      setLogo();

      setCharacter(res.data);
      setDetails(res.data);      
      
      
      } catch (error) {
          navigate('/characters');
        }  
        
  };
  
  
  
  useEffect(() => {
    details.length = 0;
    antName=name;
    getCharacter();
  }, []);
  
  
  // para recargar si viene del detalle.
  if(antName!==name){
    details.length = 0;
    antName=name;
    console.log('recarga');
    getCharacter();
  }



  // carga datos del detalle
  const setDetails = (fData) => {
    details.length = 0;
    let valores = [];    

    // casa
    valores = [];
    details = [...details, { title: "house", img: "" , items: [...valores] }, ];

    // allegiances
    valores = fData.allegiances;
    details = [
      ...details,
      { title: "allegiances", img: "noimage", items: [...valores] },
    ];

    // appearances
    valores = fData.appearances;
    details = [
      ...details,
      { title: "appearances", img: "noimage", items: [...valores] },
    ];

    // father
    valores = [fData.father];
    details = [...details, { title: "father", img: "noimage", items: [...valores] }];

    //siblings
    valores = fData.siblings;
    details = [...details, { title: "siblings", img: "noimage", items: [...valores] }];

    // titles
    valores = fData.titles;
    details = [...details, { title: "titles", img: "noimage", items: [...valores] }];
  };

  const previousPage = () => { 
    navigate(-1);
  };

  return (
    <div className="character">
      <div onClick={previousPage} className="previousPage">
        ← volver
      </div>
     


      <img
        className="character__img"
        src={character.image}
        alt=""
      ></img>

      <div className="character__name">{character.name}</div> 

      <div className="character__details">
        {details.length > 0 &&  details.map((details, index) => (<Detail key={index} details={details} logo="" />))}
      </div>
    </div>
  );
}
