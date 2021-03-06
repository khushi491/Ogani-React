import React from "react";
import Banner from "./Banner/Banner";
import BlogSection from "./BlogSection/BlogSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import LatestProductSection from "./LatestProductSection/LatestProductSection";

const Home = () => {
  return (
    <div>
      <CategoriesSection />
      <FeaturedSection />
      <Banner />
      <LatestProductSection />
      <BlogSection />
    </div>
  );
};

export default Home;
