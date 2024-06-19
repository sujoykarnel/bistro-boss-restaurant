import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommend from "../ChefRecommmend/ChefRecommend";
import CallUs from "../CallUs/CallUs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <CallUs />
      <ChefRecommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
