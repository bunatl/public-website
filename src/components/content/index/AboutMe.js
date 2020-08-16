import React from 'react';

import BioCard from './aboutme/Card';
import Bio from './aboutme/Bio';
import Writing from './aboutme/Writing';

import './Home.css';

function AboutMe () {
  return (
    <section id="aboutMe">
      <BioCard />
      <Bio />
      <Writing />
    </section>
  );
};

export default AboutMe;
