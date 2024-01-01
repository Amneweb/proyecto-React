import React from "react";
import Carousel from "../components/Carousel/Carousel";
import NovedadesEnIndex from "../components/NovedadesEnIndex/NovedadesEnIndex";
import SagasEnIndex from "../components/SagasEnIndex/SagasEnIndex";
import CategoryShow from "../components/CategoryShow/CategoryShow";

const Home = () => {
  return (
    <>
      <Carousel />
      <NovedadesEnIndex />

      <SagasEnIndex />
      <CategoryShow />
    </>
  );
};

export default Home;
