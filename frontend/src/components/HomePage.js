// HomePage.js

import React from 'react';
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
