import './Navbar.scss';
import { Link } from "react-router-dom";
import { MyContext } from '../../context/MyContext'
import { useContext } from 'react';






export default function Navbar() {
    

    const {t} = useContext(MyContext);
    return(
        
        <div className='nabvar'>

            <Link className='nabvar-links' to="/characters">{t('Characters')}</Link>
            <Link className='nabvar-links' to="/houses">{t('Houses')}</Link>
            <Link className='nabvar-links' to="/chronologic">{t('chronology')}</Link>

            {/* <Link to="/" className={({ isActive }) => isActive ? activeClassName : true}>{t('Prueba')}</Link> */}
        </div>
    )

    

}

