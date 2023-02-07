import axios from "axios";
import "./Character.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Detail from "./components/Detail";
import { MyContext } from "../../context/MyContext";


let details = [
  {
    title: "",
    img: "",
    items: [],
  },
];


export default function Character() {  
  const name = useParams().name;  
  console.log('entra en character'); 
  const navigate = useNavigate();
  const {t} = useContext(MyContext);



  // variable de estado  
  const [logo, setLogo] = useState("");  
  const [character, setCharacter] = useState({});
  

  // función para recoger los detalles del personaje
  // tiene que traer el escudo de otra url que le pasa el nombre de la casa
  const getCharacter = async () => {    
    try {    

      const res = await axios.get(`https://api.got.show/api/show/characters/${name}`);  
      
      const res2 = await axios.get(`https://api.got.show/api/book/houses/${res.data.house}`);  

      
      setLogo(res2.data[0].image);

      setCharacter(res.data);
      setDetails(res.data);      
      
      
      } catch (error) {
          navigate('/characters');
        }  
        
  };
  
  
  
  useEffect(() => {
    details.length = 0;   
    getCharacter();
  }, []);

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
        {t('← return')}
      </div>
     


      <img
        className="character__img"
        src={character.image}
        alt=""
      ></img>

      <div className="character__name">{character.name}</div> 

      <div className="character__details">
        {details.length > 0 &&  details.map((details, index) => (<Detail key={index} details={details} logo={logo} />))}
      </div>
    </div>
  );
}
