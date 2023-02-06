import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import "./DetailHouse.scss";
import { MyContext } from '../../../context/MyContext'
import { useContext } from 'react';

  
export default function Detail({details}) {  
  
  const {t} = useContext(MyContext);

  return (
    <div className="detail">
      <div className="detail__title">{t(details.title)}</div>      

      <SimpleBar style={{ height: '30vh' , colorbar:'#FFFF' }}>  

          <div className="detail__items">
            {details.items.map((item, index) => (
              <div className={"detail__item "+details.title}  key={index}> {item} </div>          
            ))}

          </div>
      </SimpleBar>
    </div>
  );
}
