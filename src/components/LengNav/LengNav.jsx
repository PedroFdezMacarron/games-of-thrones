
import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { Link } from "react-router-dom";
import './LengNav.scss'


const LengNav = () => {
    const {changeLanguaje, location } = useContext(MyContext);
    return (
      <div className="languages"> 
        <div className="logo-home">
          {location.pathname !== "/" && <Link className="leng-home" to="/"><img src ='Group.png' alt="home" /></Link>}
        </div>
        <div className="spain" onClick={() => changeLanguaje('es')}><img  type="spain" src ='spain.svg' alt="spain" /></div>
        {/* <div className="leng" onClick={() => changeLanguaje('es')}>{t("lang_es")}<img  type="spain" img src ='https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/a57e5a76-2384-449d-a6fb-ec1fa0fbc493.svg' alt="spain" /></div> */}


        <div className="leng" onClick={() => changeLanguaje('en')}><img  type="english" src ='english.svg' alt="english" /></div>
        {/* <div className="leng" onClick={() => changeLanguaje('en')}>{t("lang_en")}<img  type="english" img src ='https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/1a0bc54a-98de-42d0-9e4b-b53645e15eb6.svg' alt="spain" /></div> */}
      </div>
    );
  };
  
  export default LengNav;



