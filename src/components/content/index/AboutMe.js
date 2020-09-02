import React from 'react';

import BioCard from './aboutme/Card';
import Bio from './aboutme/Bio';
import Writing from './aboutme/Writing';

function AboutMe () {
  return (
    <section id="aboutMe">
      <div id="aboutMeInfo">
        <BioCard />
        <Bio />
      </div>
      <Writing />
    </section>
  );
};

export default AboutMe;
