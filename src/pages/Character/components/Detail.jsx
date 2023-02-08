import SimpleBar from "simplebar-react";
import { useNavigate } from "react-router-dom";
import "simplebar-react/dist/simplebar.min.css";
import "./Detail.scss";
import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";
import { reloadResources } from "i18next";
export default function Detail({ details, logo }) {
  // hace destructuring {details,logo}

  console.log(logo);
  const navigate = useNavigate();

  const { t } = useContext(MyContext);

  // ir al personaje del padre
  const goToFather = (urlFather, origin) => {
    if (origin === "father" || origin === "siblings") {
      navigate(urlFather, { replace: true });
    }
  };

  return (
    <div className="detail">
      <div className="detail__title">{t(details.title)}</div>

      <SimpleBar style={{ height: "30vh" }}>
        {details.title === "house" && (
          <img className="detail__img" src={logo} alt="alt" />
        )}

        <div className="detail__items">
          {details.items.map((item, index) => (
            <div
              onClick={() => goToFather(`/character/${item}`, details.title)}
              className={"detail__item " + details.title}
              key={index}
            >
              {" "}
              {item}{" "}
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
