import React from "react";
import { apiEntity } from "../apiConfig";
import Banner from "../Components/Banner/Banner";
import Carousel from "../Components/Carousel/Carousel";
import Separator from "../Components/Separator/Separator";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Separator height={"60px"} />
      <Carousel
        entity={apiEntity.popularMovies}
        title={"Peliculas populares"}
      />
      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.topRatedMovies}
        title="Peliculas mejor puntuadas"
      />
      <Separator height={"40px"} />
      <Carousel entity={apiEntity.popularTv} title="Series populares" />
      <Separator height={"40px"} />
      <Carousel entity={apiEntity.topRatedTv} title="Series mejor puntuadas" />
    </>
  );
};

export default Homepage;