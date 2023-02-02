
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


function App() {
  // const {t, i18n} = useTranslation(['translation']);
  // const setLanguage = (code) => {
  //   i18n.changeLanguage(code);
  // }
  let location = useLocation();
  console.log(location.pathname);

  return (
    <div className= {location.pathname === '/' ? 'home': 'others'}>
    
      
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
              
        
      
    </div>
  );
}

export default App;
