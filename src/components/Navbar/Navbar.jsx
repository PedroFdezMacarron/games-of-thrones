import './Navbar.scss';
import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <div className='nabvar'>
            <Link className='nabvar-links' to="/characters">Personajes</Link>
            <Link className='nabvar-links' to="/character/Eddard Stark">EDDGARD</Link>
            <Link className='nabvar-links' to="/houses">Casas</Link>
            <Link className='nabvar-links' to="/chronologic">Cronologia</Link>
        </div>
    )

}

