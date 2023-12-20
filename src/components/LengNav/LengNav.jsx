import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { Link } from "react-router-dom";
import "./LengNav.scss";
import english from "./english.svg";
import spanish from "./spain.svg";
import house from "./Group.png";

const LengNav = (coches) => {
  const { changeLanguaje, location } = useContext(MyContext);
 
  function CargaDatos(coches) {
    var lcoches = JSON.parse(coches);
    console.log(lcoches);
    const table = document.querySelector("table");

    lcoches.forEach((coche) => {
      console.log(coche.Marca);

      const row = table.insertRow();

      const cellMarca = row.insertCell();
      cellMarca.textContent = coche.Marca;

      const cellModelo = row.insertCell();
      cellModelo.textContent = coche.Modelo;

      const cellColor = row.insertCell();
      cellColor.textContent = coche.Color;

      const cellPotencia = row.insertCell();
      cellPotencia.textContent = coche.Potencia;

      const cellTransmision = row.insertCell();
      cellTransmision.textContent = coche.Transmisión;

      const cellCombustible = row.insertCell();
      cellCombustible.textContent = coche.Combustible;

      const cellAño = row.insertCell();
      cellAño.textContent = coche.Año;

      const cellTraccion = row.insertCell();
      cellTraccion.textContent = coche.Tracción;

      const cellPrecio = row.insertCell();
      cellPrecio.textContent = coche.Precio;
    });
  }
  CargaDatos(coches);
  return (

    // <div className="languages">
    //   <div className="logo-home">
    //     {location.pathname !== "/" && <Link className="leng-home" to="/"><img src ={house} alt="home" /></Link>}
    //   </div>
    //   <div className="spain" onClick={() => changeLanguaje('es')}><img  type="spain" src ={spanish} alt="spain" /></div>
    //   {/* <div className="leng" onClick={() => changeLanguaje('es')}>{t("lang_es")}<img  type="spain" img src ='https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/a57e5a76-2384-449d-a6fb-ec1fa0fbc493.svg' alt="spain" /></div> */}

    //   <div className="leng" onClick={() => changeLanguaje('en')}><img  type="english" src ={english} alt="english" /></div>
    //   {/* <div className="leng" onClick={() => changeLanguaje('en')}>{t("lang_en")}<img  type="english" img src ='https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/1a0bc54a-98de-42d0-9e4b-b53645e15eb6.svg' alt="spain" /></div> */}
    // </div>
    
    <div>
      <h1>Lista de Coches</h1>
      <table>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Color</th>
          <th>Potencia</th>
          <th>Transmisión</th>
          <th>Combustible</th>
          <th>Año</th>
          <th>Tracción</th>
          <th>Precio</th>
        </tr>
      </table>
      CargaDatos(coches);
    </div>
  );
};

export default LengNav;
