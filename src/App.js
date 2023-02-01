
// import { useTranslation } from 'react-i18next';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LengNav from './components/LengNav/LengNav';
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

  return (
    <Router>
      <div className="goth">     
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
            
      
    </Router>
  );
}

export default App;
