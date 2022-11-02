import React from "react";
import Header from "../header/header";
import LandingPage from "./landing-page1";
import LandingPage2 from "./landing-page2";
import Landingpage3 from "./landing-page3";
import LandingPage4 from "./landing-page4";

const Homepage = () => {
  return (
    <>
      <Header headType={false} />
      <LandingPage />
      <LandingPage2 />
      <Landingpage3 />
      <LandingPage4 />
    </>
  );
};

export default Homepage;
