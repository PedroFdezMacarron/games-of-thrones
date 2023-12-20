

import "./HomePage.scss";
import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import Navbar from "../../components/Navbar/Navbar";


export default function HomePage() {
    const {t} = useContext(MyContext);
    return(
      <div>
        ESTO ES UNA PRUEBA
      </div>
    
        // <div className="background">
        //         <div className="games-title">
        //            <span className="Games-of-Thrones">{t('Games')}</span> 
        //         </div>
        //         <div>
        //           <span className="Games-of-Thrones">{t('Of trones')}</span>
        //         </div>
        //         <div className="navbardown">
        //           <Navbar></Navbar>  
        //         </div>
        // </div>
       
    )

}