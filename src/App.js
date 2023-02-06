
// import { useTranslation } from 'react-i18next';
import { Route, Routes, useLocation } from "react-router-dom";
import LengNav from './components/LengNav/LengNav';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Characters from './pages/Characters/Characters';
import Character from './pages/Character/Character';
import Houses from './pages/House/House';
import House from './pages/House/House';
import Chronologic from './pages/Chronologic/Chronologic';
import { MyContext } from './context/MyContext'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "./components/Navbar/Navbar";


// import { Link } from "react-router-dom";

function App() {
  const {t, i18n} = useTranslation(['translation']);

  const changeLanguaje = (code) => {
    i18n.changeLanguage(code);
  }
  const [number2, setNumber2] = useState(0)
  const [number, setNumber] = useState(2000)
 
  let location = useLocation();
  console.log(location.pathname);

  // let home = useLocation();
  // console.log(home.pathname);
  return (

    <div className= {location.pathname === '/' ? 'home': 'others'}>
    {/* <Link className={home.pathname === '/' ? 'home' : 'others'}> */}

    <MyContext.Provider value={{number, setNumber, number2, setNumber2, t, changeLanguaje}}>
          <div className="goth" >     
                  <LengNav></LengNav>
          </div>   
          
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/character/:name' element={<Character/>}/>
          <Route path='/houses' element={<Houses/>}/>
          <Route path='/house/:name' element={<House/>}/>
          <Route path='/chronologic' element={<Chronologic/>}/>
        </Routes>

      <Navbar></Navbar>
      </MyContext.Provider>
    {/* </Link> */}
    </div>
    

  );
}

export default App;
