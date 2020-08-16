import React from 'react';
import { Helmet } from "react-helmet";

import AboutMeSection from './aboutme/AboutMeSection';
import Education from './aboutme/Education';
import Work from './aboutme/Work';
import Internships from './aboutme/Internships';
import Skills from './aboutme/Skills';
import Certificates from './aboutme/Certificates';

import './aboutme/aboutme.css';

function AboutMe () {
  return (
    <div id="aboutme">
      <Helmet>
        <title>{ `About me | 🙋‍♂️ | Find out more about Lukas Bunat` }</title>
        <meta name="description" content="Get to know more info about Lukas Bunat. My persona, knowledge, skill set, work & internship experience and education - you will find all that right here." />
      </Helmet>

      <h1>About Me</h1>
      <AboutMeSection />
      <Skills />
      <Work />
      <Internships />
      <Education />
      <Certificates />
    </div>
  );
}

export default AboutMe;
