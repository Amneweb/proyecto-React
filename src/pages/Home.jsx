import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Carousel from "../components/Carousel/Carousel";
import NovedadesEnIndex from "../components/NovedadesEnIndex/NovedadesEnIndex";

const Home = () => {
  return (
    <>
      <Carousel />
      <NovedadesEnIndex />
      <ItemListContainer />
    </>
  );
};

export default Home;
