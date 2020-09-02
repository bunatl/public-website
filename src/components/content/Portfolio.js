import React, { useState } from 'react';
import { Helmet } from "react-helmet";

// import projects preview pics
// import tech icons react, js es6 / 2017, html5, css3
// FaHtml5, FaNodeJs, FaJava, FaGithub --  DiMongodb, DiMysql
import { FaNodeJs, FaGithub, FaReact, FaJava } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
// import { SiTypescript } from "react-icons/si";
// import { DiMongodb } from 'react-icons/di';
// import { DiJavascript } from "react-icons/di";
// import { IoLogoCss3 } from "react-icons/io";

// images
import converterGif from '../../assests/gif/currency-converter-demo.gif';
import userGenGif from '../../assests/gif/user-generator-demo.gif';
import scraperGif from '../../assests/gif/webscrape-demo.gif';
import tweetGif from '../../assests/gif/tweet-bot-demo.gif';
import recorderPng from '../../assests/images/projects/mouse-recorder-gui.png';
import stockLogger from '../../assests/images/projects/StockLogger-gui.png';
import www from '../../assests/images/projects/personalWebsite.png';

function Portfolio () {
  // name, preview, git, demo, tech[], info[]
  const [ projects ] = useState([
    {
      name: "Currency converter",
      preview: converterGif,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/CurrencyConverter" },
      demo: { icon: <RiComputerLine />, link: "http://currency.techis.fun/" },
      technologies: [
        { icon: <FaReact />, name: "ReactJS", link: "https://reactjs.org/" },
      ],
      info: [
        "Online coverter showing current currency exchnage rates published by Czech National Bank (CNB)",
        "User can filter specific only currency by country or currency code",
        "Currency rates from the past can be also view via date picker",
        "Data from CNB are obtained on mount - axios is used. In order to pass CORS policies heroku proxy is used"
      ]
    },
    {
      name: "Randmo user generator",
      preview: userGenGif,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/user-generator" },
      demo: { icon: <RiComputerLine />, link: "https://user.techis.fun/" },
      technologies: [
        { icon: <FaReact />, name: "ReactJS", link: "https://reactjs.org/" },
        { icon: "", name: "Typescript", link: "https://www.typescriptlang.org/" },
      ],
      info: [
        "Online web application that fetches randomly generated users and display them",
        "User can specify parameters that will be apply during info generation",
        "Application is benefiting from already implemented API that generating data about virtual users",
        "The application is typed with Typescript and strict mode for strong type checks and enforcement"
      ]
    },
    {
      name: "Web Scrapenator",
      preview: scraperGif,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/WebScrapenator" },
      demo: { icon: <RiComputerLine />, link: "https://scraper.techis.fun/" },
      technologies: [
        { icon: <FaNodeJs />, name: "NodeJS", link: "https://nodejs.org/en/" },
        { icon: "", name: "ExpressJS", link: "https://expressjs.com/" },
        { icon: "", name: "EJS", link: "https://ejs.co/" },
      ],
      info: [
        "An online tool allowing user to scrape data from any given website based on search parameters",
        "At first, HTML page data are fetched and displayed and results are calculated based on given parameters",
        "Each additional line with parameters use previously calculated results",
        "Every line with parameters can have up to 4 parameters (ID, class, tag, text)",
        "Fetch data are obtained as a text and parsed wuth DOMParser into HTML Object "
      ]
    },
    {
      name: "Tweet Bot Wall",
      preview: tweetGif,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/reactjs-tweet-bot" },
      demo: { icon: <RiComputerLine />, link: "https://wall.techis.fun/" },
      technologies: [
        { icon: <FaReact />, name: "ReactJS", link: "https://reactjs.org/" },
      ],
      info: [
        "Tweet bot lets user to create a tweet that is shown on the wall",
        "Each tweet can liked, disliked or even deleted",
        "Tweets can be filtered by title or text",
        "In the future tweets will be stored in a DB (as a persistent memory)"
      ]
    },
    {
      name: "Personal Website",
      preview: www,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/public-website" },
      demo: { icon: <RiComputerLine />, link: "https://bunat.cz/" },
      technologies: [
        { icon: <FaReact />, name: "ReactJS", link: "https://reactjs.org/" },
      ],
      info: [
        "My personal website, for my online presence",
        "The website is also a project that is part of my projects' portfolio",
        "It is written in ReactJS, using diffrent libraries and ReactJS & JS concepts to ilustrate my knowledge and skills in this field",
        "I continuosly working and improving my website for better user/reader experience"
      ]
    },
    {
      name: "Mouse Recorder",
      preview: recorderPng,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/MouseRecorder" },
      demo: { icon: <RiComputerLine />, link: "#indexPortfolio" },
      technologies: [
        { icon: "", name: "C#", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
      ],
      info: [
        "Windows GUI application allowing to record user mouse movement and replay it",
        "User can specify number of loops & randomize delay and smouse click position by given pixels",
        "GUI and application buttons can be control by keyboard buttons (F8-F10)",
        "GUI shows trace log of mouse movement and mouse actionas + current X, Y mouse position"
      ]
    },
    {
      name: "Market Stock price logger",
      preview: stockLogger,
      github: { icon: <FaGithub />, link: "https://github.com/bunatl/StockMarketLogger" },
      demo: { icon: <RiComputerLine />, link: "#indexPortfolio" },
      technologies: [
        { icon: <FaJava />, name: "JAVA EE, JDBC, JSTL", link: "https://www.oracle.com/java/technologies/java-ee-glance.html" },
        { icon: "", name: "Tomcat server", link: "http://tomcat.apache.org/" },
      ],
      info: [
        "Showcase online logger that logs currect price of the given stock",
        "Data are stored in MySQL DB, therefore persistent storage allows to browse historic records",
        "Project empathizes on usage of JDBC, JSTL and MVC patters - the main of this demo is to demostrate my skill in these (used) technologies",
        "In the future, project can be used as a personal stock dog watcher. However same outcome with less efford can be achieved with Stack technologies"
      ]
    }
  ]);

  return (
    <div id="portfolio">
      <Helmet>
        <title>{ `Portfolio | 💼 | Lukas Bunat personal project's collection` }</title>
        <meta name="description" content="Some of my full-stack projects and software programs that I would like to share are displayed here together with description, links to Github and live demo." />
      </Helmet>

      <h1>Portfolio</h1>
      {/* render array of projects */ }
      { projects.map((item, i) => (
        // props structure: name, preview, git, demo, tech[], info[]
        <section className="project" key={ i }>
          {/* Left Side */ }
          <div>
            {/* Preview */ }
            <div><a href={ item.preview } target="_blank" rel="noopener noreferrer"><img src={ item.preview } alt="Project preview"></img></a></div>
            {/* Git and preview */ }
            <div>
              <div><a href={ item.github.link } target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></div>
              <div><a href={ item.demo.link } target="_blank" rel="noopener noreferrer"><RiComputerLine /> Live demo</a></div>
            </div>
            {/* Technologies */ }
            <div>
              { item.technologies.map((tech, index) => (
                <div key={ index }><a href={ tech.link } target="_blank" rel="noopener noreferrer">{ tech.icon } { ' ' } { tech.name }</a></div>
              )) }
            </div>
          </div>
          {/* Right Side */ }
          <div>
            {/* Name */ }
            <div>{ item.name }</div>
            {/* Info */ }
            <div>
              <ul>
                { item.info.map((item, i) => (
                  <li key={ i } style={ { marginBottom: ".3em" } }>{ item }</li>
                )) }
              </ul>
            </div>
          </div >
        </section >

      )) }

    </div>
  );
}

export default Portfolio;
