import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Carousel from "../components/Carousel/Carousel";
import NovedadesEnIndex from "../components/NovedadesEnIndex/NovedadesEnIndex";
import SagasEnIndex from "../components/SagasEnIndex/SagasEnIndex";

const Home = () => {
  return (
    <>
      <Carousel />
      <NovedadesEnIndex />
      <SagasEnIndex />
      <ItemListContainer />
    </>
  );
};

export default Home;
