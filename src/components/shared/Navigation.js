import React from 'react';

import NavIcon from './NavIcon';
import { Link } from 'react-router-dom';

// https://stackoverflow.com/questions/57168878/create-react-app-unable-to-find-my-images-folder
import LogoImage from "../../assests/images/logo/logoTransparent.svg";

// react icons (https://react-icons.netlify.com/#/), specifically font-awesome
import { FaUserTie, FaFileCode, FaPencilAlt, FaHandshake } from 'react-icons/fa';

function Navigation () {
  const NavIconStyle = {
    height: "3.5em",
    width: "3.5em",
    size: "100%",
    color: "black",
  };

  const [ icons ] = React.useState([
    { component: <FaUserTie style={ NavIconStyle } />, link: "/AboutMe", tooltip: "About Me" },
    { component: <FaFileCode style={ NavIconStyle } />, link: "/Portfolio", tooltip: "Portfolio" },
    { component: <FaPencilAlt style={ NavIconStyle } />, link: "/Blog", tooltip: "Blog" },
    { component: <FaHandshake style={ NavIconStyle } />, link: "/HireMe", tooltip: "Hire Me" },
    // { component: <FaCogs style={ NavIconStyle } />, link: "", tooltip: "Settings" }
  ]);

  return (
    <nav>
      <div id="progress-container">
        <div id="progress-bar"></div>
      </div>

      <div id="navLinks">
        {/* Images should be store in assest folder: https://stackoverflow.com/questions/44643041/do-i-store-image-assets-in-public-or-src-in-reactjs  */ }
        <div>
          <Link to="/">
            <img id="logoNav" src={ LogoImage } alt="Website logo" />
          </Link>
        </div>

        { icons.map((val, index) => (
          <NavIcon key={ index } prop={ val } />
        )) }
      </div>
    </nav>
  );
}

export default Navigation;
