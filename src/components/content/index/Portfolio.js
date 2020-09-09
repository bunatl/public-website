import React, { useState, useEffect } from 'react';

// import ProjectTile from './portfolio/ProjectTile';

// icons
import { FaNodeJs, FaGithub, FaReact, FaJava } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
// import { DiMongodb } from 'react-icons/di';

// images
import converterGif from '../../../assests/gif/currency-converter-demo.gif';
import scraperGif from '../../../assests/gif/webscrape-demo.gif';
import tweetGif from '../../../assests/gif/tweet-bot-demo.gif';
import recorderPng from '../../../assests/images/projects/mouse-recorder-gui.png';
import stockLogger from '../../../assests/images/projects/StockLogger-gui.png';

// img previews
import converterGifPreview from '../../../assests/gif/previews/currency-converter-demo-preview.gif';
// import userGenGifPreview from '../../../assests/gif/previews/user-generator-demo-preview.gif';
import scraperGifPreview from '../../../assests/gif/previews/webscrape-demo-preview.gif';
import tweetGifPreview from '../../../assests/gif/previews/tweet-bot-demo-preview.gif';
import stockLoggerPreview from '../../../assests/images/projects/previews/StockLogger-gui-preview.png';

function Porfolio () {
  const [ currentTab, setCurrentTab ] = useState(0);

  const [ projects ] = useState([
    [
      {
        name: "Currency converter",
        fullSize: converterGif,
        preview: converterGifPreview,
        github: { icon: <FaGithub />, link: "https://github.com/bunatl/CurrencyConverter" },
        demo: { icon: <RiComputerLine />, link: "http://currency.techis.fun/" },
        description: "Online coverter showing current currency exchnage rates published by Czech National Bank.",
        technologies: [
          { icon: <FaReact />, name: "ReactJS", link: "https://reactjs.org/" },
        ]
      },
      {
        name: "Web Scrapenator",
        fullSize: scraperGif,
        preview: scraperGifPreview,
        github: { icon: <FaGithub />, link: "https://github.com/bunatl/WebScrapenator" },
        demo: { icon: <RiComputerLine />, link: "https://scraper.techis.fun/" },
        description: "An online tool allowing user to scrape data from any given website based on search parameters.",
        technologies: [
          { icon: <FaNodeJs />, name: "NodeJS", link: "https://nodejs.org/en/" },
          { icon: "", name: "ExpressJS", link: "https://expressjs.com/" },
          { icon: "", name: "EJS", link: "https://ejs.co/" },
        ]
      },
      {
        name: "Tweet Bot Wall",
        fullSize: tweetGif,
        preview: tweetGifPreview,
        github: { icon: <FaGithub />, link: "https://github.com/bunatl/reactjs-tweet-bot" },
        demo: { icon: <RiComputerLine />, link: "https://wall.techis.fun/" },
        description: "Frontend side of the whole MERN project. Allows anybody to post tweets on public wall.",
        technologies: [
          { icon: <FaReact />, name: "ReactJS", link: "https://reactjs.org/" },
        ]
      }
    ],
    [
      {
        name: "Mouse Recorder",
        fullSize: recorderPng,
        preview: recorderPng,
        github: { icon: <FaGithub />, link: "https://github.com/bunatl/MouseRecorder" },
        demo: { icon: <RiComputerLine />, link: "#indexPortfolio" },
        description: "Windows application that record and replay users mouse movement.",
        technologies: [
          { icon: "", name: "C#", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
        ]
      },
      {
        name: "Market Stock price logger",
        fullSize: stockLogger,
        preview: stockLoggerPreview,
        github: { icon: <FaGithub />, link: "https://github.com/bunatl/StockMarketLogger" },
        demo: { icon: <RiComputerLine />, link: "#indexPortfolio" },
        description: "Logger that log data(prices), to a DB, about given stock. It also show historic data.",
        technologies: [
          { icon: <FaJava />, name: "JAVA EE, JDBC, JSTL", link: "https://www.oracle.com/java/technologies/java-ee-glance.html" },
          { icon: "", name: "Tomcat server", link: "http://tomcat.apache.org/" },
        ]
      }
    ]
  ]);

  // on current tab change
  // fires after all DOMs are loaded: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  useEffect(() => {
    const tabs = document.getElementsByClassName("tabs")[ 0 ].children;

    if (currentTab === 0) {
      tabs[ 0 ].classList.add("active");
      tabs[ 1 ].classList.remove("active");
    } else {
      tabs[ 1 ].classList.add("active");
      tabs[ 0 ].classList.remove("active");
    }
  }, [ currentTab ]);

  return (
    <section id="indexPortfolio">
      <div className="tabs">
        <div onClick={ () => setCurrentTab(0) }>Stack Projects</div>
        <div onClick={ () => setCurrentTab(1) }>Software Development</div>
      </div>
      <div id="projects">
        { projects[ currentTab ].map((project, index) => (
          <ProjectTile key={ index } prop={ project } />
        )) }
      </div>
    </section>
  );
}

function ProjectTile ({ prop }) {
  return (
    <div>
      {/* Name */ }
      <div>{ prop.name }</div>
      <div><a href="/Portfolio">More info</a></div>
      {/* Picture */ }
      <div>
        <img src={ prop.preview } alt={ "Preview" }></img>
      </div>
      {/* Code, demo */ }
      <div>
        <div>
          { prop.github.icon }{ ' ' }
          <a href={ prop.github.link }>GitHub</a>
        </div>
        <div>
          { prop.demo.icon }{ ' ' }
          <a href={ prop.demo.link }>Live Demo</a>
        </div>
      </div>
      {/* Description */ }
      <div>{ prop.description }</div>
      {/* Technologies */ }
      <div>
        { prop.technologies.map((tech, index) => (
          <div key={ index }>{ tech.icon } { ' ' } { tech.name }</div>
        )) }
      </div>
    </div>
  );
}

export default Porfolio;
