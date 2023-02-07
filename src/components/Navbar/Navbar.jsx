import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";

export default function Navbar() {
  const { t } = useContext(MyContext);
  return (
    <div className="nabvar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nabvar-links active" : "nabvar-links"
        }
        to="/characters"
      >
        {t("Characters")}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "nabvar-links active" : "nabvar-links"
        }
        to="/houses"
      >
        {t("Houses")}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "nabvar-links active" : "nabvar-links"
        }
        to="/chronology"
      >
        {t("chronology")}
      </NavLink>
    </div>
  );
}
