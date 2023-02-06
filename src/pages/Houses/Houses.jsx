import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import HousesGallery from "../../components/HousesGallery/HousesGallery";
import "./Houses.scss";
import {HousesSearcher} from '../../components/HousesSearcher/HousesSearcher'

import Loading from "../../components/Loading/Loading";
import SimpleBar from "simplebar-react";
import Navbar from "../../components/Navbar/Navbar";

export const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [housesView, setHousesView] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const houses = await axios.get("https://api.got.show/api/book/houses/");
      setHouses(houses.data);
      setHousesView(houses.data);
    };

    trackPromise(getHouses());
  }, []);

  const searchHouses = (name) => {
    if (name.length < 1) {
      return setHousesView(houses);
    }
    const filtered = houses.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filtered);
    setHousesView(filtered);
  };

  return (
    <>
       
      <HousesSearcher setSearch={searchHouses} />
      <main className="home__container noimage__container">
        <SimpleBar autoHide={false} className="c-scroll-characters">
          <div className="houses-gallery__container">
            {housesView.length < 1 ? (
              <Loading />
            ) : (
              housesView.map((house) => (
                <HousesGallery key={house._id} house={house} />
              ))
            )}
          </div>
        </SimpleBar>
      </main>
        <Navbar></Navbar>
    </>
  );
};

export default Houses;