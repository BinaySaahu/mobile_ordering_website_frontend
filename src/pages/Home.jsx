import React from "react";
import HeroSection from "../components/home_page/HeroSection";
import Products from "../components/home_page/Products";

const Home = ({ products, load }) => {
  return (
    <div>
      <HeroSection />
      <Products products={products} load={load} />
    </div>
  );
};

export default Home;
