import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React router setup, creating and changing routes + route params tutorial: https://www.youtube.com/watch?v=110dW3l5GQY
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from '../shared/Navigation';
import Footer from '../shared/Footer';

import AboutMe from '../content/AboutMe';
import Blog from '../content/Blog';
import HireMe from '../content/HireMe';
import Home from '../content/Home';
import Portfolio from '../content/Portfolio';

function App () {
  return (
    <BrowserRouter>
      {/* Navigation and Footer will be displayed on all routes -> no exact keyword */ }
      <Route path="/" component={ Navigation } />

      <main id="pageContent">
        {/* 
            Based on URL display corresponding content component 
            URL has to match precisely, since the content belong to certain URL 
        */}
        <Route path="/aboutme" exact component={ AboutMe } />
        <Route path="/blog" exact component={ Blog } />
        <Route path="/hireme" exact component={ HireMe } />
        <Route path="/" exact component={ Home } />
        <Route path="/portfolio" exact component={ Portfolio } />

        <Route path="/" component={ Footer } />
      </main>

    </BrowserRouter>
  );
}

// No named export: https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default
export default App;
