
// import { useTranslation } from 'react-i18next';
import { Route, Routes, useLocation } from "react-router-dom";
import LengNav from './components/LengNav/LengNav';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Characters from './pages/Characters/Characters';
import Character from './pages/Character/Character';
import Houses from './pages/Houses/Houses';
import House from './pages/House/House';


import { MyContext } from './context/MyContext'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "./components/Navbar/Navbar";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";




function App() {
  const {t, i18n} = useTranslation(['translation']);

  const changeLanguaje = (code) => {
    i18n.changeLanguage(code);
  }
  const [number2, setNumber2] = useState(0)
  const [number, setNumber] = useState(2000)
 
  let location = useLocation();
  console.log(location.pathname);

  
  return (

    <div className= {location.pathname === '/' ? 'home': 'others'}>

    

    <MyContext.Provider value={{number, setNumber, number2, setNumber2, t, changeLanguaje, location}}>
          <div className="goth" >     
                  <LengNav></LengNav>
          </div>   
          
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/character/:name' element={<Character/>}/>
          <Route path='/houses' element={<Houses/>}/>
          <Route path='/house/:name' element={<House/>}/>
          <Route path='/chronology' element={<ChronologyPage/>}/>
        </Routes>



      {/* {(location.pathname === "/" || location.pathname === "/characters" || location.pathname === "/houses"  || location.pathname === "/chronologic") && <Navbar></Navbar>} */}
      </MyContext.Provider>
    
    </div>
    

  );
}

export default App;
