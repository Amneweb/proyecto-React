import React from "react";
import Carousel from "../components/Carousel/Carousel";
import NovedadesEnIndex from "../components/NovedadesEnIndex/NovedadesEnIndex";
import SagasEnIndex from "../components/SagasEnIndex/SagasEnIndex";
import CategoryShow from "../components/CategoryShow/CategoryShow";
import AutorEnIndex from "../components/AutorEnIndex/AutorEnIndex";

const Home = () => {
  return (
    <>
      <Carousel />
      <NovedadesEnIndex />

      <SagasEnIndex />
      <CategoryShow />
      <AutorEnIndex />
    </>
  );
};

export default Home;
