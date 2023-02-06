import SimpleBar from 'simplebar-react';
import { useNavigate } from "react-router-dom";
import 'simplebar-react/dist/simplebar.min.css';
import "./Detail.scss";
export default function Detail({details},{houseImg}) {
  
  const navigate = useNavigate();
  let logoUrlClass="detail__"+details.title;
  
  houseImg="https://vignette.wikia.nocookie.net/gameofthrones/images/6/68/Blackmont_heraldry_GOT_exhibition.jpg/revision/latest/scale-to-width-down/350?cb=20150503183457"

// ir al personaje del padre
const goToFather = (urlFather,origin)=>{
    if(origin==='father'){
      navigate(urlFather);
    }
}

  
  return (
    <div className="detail">
      <div className="detail__title">{details.title}</div>      

      <SimpleBar style={{ height: '30vh' , colorbar:'#FFFF' }}>  

          {details.title==="house" &&  <img className={logoUrlClass} src={houseImg} alt ='alt' />}  

          <div className="detail__items">
            {details.items.map((item, index) => (
              <div onClick={() => goToFather(`/character/${item}`,details.title)} className={"detail__item "+details.title}  key={index}> {item} </div>          
            ))}

          </div>
      </SimpleBar>
    </div>
  );
}
