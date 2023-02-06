

import "./HomePage.css";
import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import Navbar from "../../components/Navbar/Navbar";


export default function HomePage() {
    const {t} = useContext(MyContext);
    return(
    
        <div className="background">

            
                <div className="games-title">
                   <span className="Games-of-Thrones">{t('Games of Thrones')}</span> 
                </div>
                <div className="navbardown">
                  <Navbar></Navbar>  
                </div>
        </div>
       
    )

}