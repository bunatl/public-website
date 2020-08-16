import React from 'react';

import SocialMedia from './SocialMedia';

function Footer () {
  return (
    <footer>
      <SocialMedia />

      <div>Developed by <b><a href="https://github.com/bunatl" target="_blank" rel="noopener noreferrer">Lukas Bunat</a></b> in <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React</a> with ❤</div>
      <div>&copy; All Rights Reserved</div>
      <div>2020{ (new Date().getFullYear()) === 2020 ? "" : "-" + (new Date().getFullYear()) }</div>
    </footer>
  );
}

export default Footer;
