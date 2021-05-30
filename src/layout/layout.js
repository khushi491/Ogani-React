import React from "react";

import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
// import PagePreloder from "../components/UI/PagePreloder/PagePreloder";
import Humberger from "../components/UI/Humberger/Humberger";

import HeroSection from "../components/UI/HeroSection/HeroSection";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <PagePreloder /> */}
      <Humberger />
      <Header />
      <HeroSection />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
