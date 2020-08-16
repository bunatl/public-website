import React from 'react';

import { TiSocialLinkedin } from 'react-icons/ti';
import { GoMail, GoMarkGithub } from 'react-icons/go';
import { FiYoutube } from 'react-icons/fi';

// Destructuring passed object element - the prop property
function SocialMedia () {
  const [ icons ] = React.useState([
    { component: <GoMail />, link: "mailto:lukas@bunat.cz" },
    { component: <TiSocialLinkedin />, link: "https://www.linkedin.com/in/lukasbunat" },
    { component: <GoMarkGithub />, link: "https://github.com/bunatl" },
    { component: <FiYoutube />, link: "https://www.youtube.com/channel/UCwXchSH4VMn5cakMdSQp5PQ" }
  ]);

  return (
    <div className="socialMedia">
      { icons.map((icon, i) => (
        <a key={ i } href={ icon.link } target="_blank" rel="noopener noreferrer"> { icon.component }</a>
      )) }
    </div>
  );
}

export default SocialMedia;
