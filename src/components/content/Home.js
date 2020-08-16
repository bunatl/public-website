import React from 'react';
import { Helmet } from "react-helmet";

import Cover from './index/Cover';
import AboutMe from './index/AboutMe';
import Stats from './index/Stats';
import Map from './index/Map';
import Portfolio from './index/Portfolio';
import ContactMe from './index/ContactMe';

import './index/Home.css';

function Home () {
  return (
    <div className="home">
      <Helmet>
        <title>{ `Lukas Bunat | 🌍 | Personal website & portfolio` }</title>
        <meta name="description" content="My name is Lukas Bunat and this is my personal website, online portfolio, blog and business platform. All in one place, so click ⤴ and learn more about me!" />
      </Helmet>

      <Cover />
      <AboutMe />
      <Portfolio />
      <Stats />
      <Map />
      <ContactMe />
    </div>
  );
}

export default Home;
