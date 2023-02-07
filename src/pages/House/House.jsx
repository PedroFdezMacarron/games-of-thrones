import axios from "axios";
import "./House.scss";
import { useNavigate, useParams } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import DetailHouse from "./components/DetailHouse";
import { MyContext } from "../../context/MyContext";



let details = [
  {
    title: "",   
    items: [],
  },
];



export default function House() {
  const name = useParams().name; 
  const navigate = useNavigate();

  


  // variable de estado
  const [houseData, setHouse] = useState({});
  const [logo, setLogo] = useState({});
  const {t} = useContext(MyContext);
  let fName;

  // función para recoger los detalles de la casa y la imagen de otra url
  const getHouse = async () => {   

    await axios.get( `https://api.got.show/api/show/houses/${name}`).then((response) => {
        setHouse(response.data[0]);
        setDetails(response.data[0]);
        fName=response.data[0].name;
        console.log(fName);
        return response.data[0];
    }).then(async (houseData) => {
        await axios.get(`https://api.got.show/api/book/houses/${fName}`).then((res2) => {
            setLogo(res2.data[0].image); // firstData is still an empty Object here for some reason
            console.log('res2',res2.data[0].image);
        });
    });
  };

  // carga datos del detalle
  const setDetails = (fData) => {
    // limpia datos
    let valores = [];

    // words
    valores = [fData.words];
    details = [
      ...details,
      { title: "words", items: [...valores] },
    ];

    // seat
    valores = [fData.seat];
    details = [
      ...details,
      { title: "seat", items: [...valores] },
    ];

      // region
      valores = [fData.region];
      details = [
        ...details,
        { title: "region", items: [...valores] },
      ];

    //allegiance
    valores = fData.allegiance;
    details = [...details, { title: "allegiance", items: [...valores] }];

    //religion
    valores = fData.religion;
    details = [...details, { title: "religions", items: [...valores] }];

    // fundation
    let date=fData.createdAt.substring(0 , 10)
    let fDate=date.substring(8,10)+"-"+date.substring(5,7)+"-"+date.substring(0,4);
    valores = [fDate];
    details = [...details,{ title: "fundation", items: [...valores] },
    ];

  };



  useEffect(() => {
    details.length = 0;
    getHouse();
  }, []);



  const previousPage = () => {
    navigate(-1);
  };

  return (
    <div className="house">
      <div onClick={previousPage} className="previousPage">
        {t('← return')}
      </div>      
  
      <img className="house__img" src={logo}  alt={houseData.name} ></img>

      <div className="house__name">{houseData.name}</div>

        <div className="house__details">
            {details.length > 0 &&
            details.map((details, index) => (
                <DetailHouse key={index} details={details} />
            ))}
        </div>

    </div>
  );
}