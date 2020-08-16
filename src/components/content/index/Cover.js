import React, { useState, useEffect } from 'react';
import SocialMedias from '../../shared/SocialMedia';

import resume from '../../../assests/pdf/resume.pdf';

// useState when states dont affect each other
// when states affect other states or we need to update more states use useReducer
function Cover () {
  const [ currentProfession, setCurrentProfession ] = useState("");

  useEffect(() => {
    const professions = [ "Full-Stack Developer", "Software Developer",
      "Data Engineer", "Business Analytic", "Traveler" ];

    let i = 0;
    const interval = setInterval(() => {
      setCurrentProfession(professions[ i++ ]);

      // make infinite loop
      if (i > professions.length - 1) i = 0;
    }, 1500);
    return () => clearInterval(interval);

  }, []);

  return (
    <section id="cover">
      {/* adding white char in order to set margins on child's element */ }
      {/* https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element */ }
      &nbsp;
      {/* Vanilla JS typing effect */ }
      <div id="coverInfo">
        {/* leftside */ }
        <div>
          <div>
            <a href={ resume } >
              <span role="img" aria-labelledby="resumeIcon">📄 </span>Resume
            </a>
          </div>
          <div>
            <a href="/aboutMe">
              <span role="img" aria-labelledby="resumeIcon">🤵 </span>About me
            </a>
          </div>
          {/* last row, new row, contact me */ }
          <div><a href="#contactForms">Contact me</a></div>
          {/* Has its pwn div */ }
          <SocialMedias />
        </div>
        {/* divider */ }
        <div><div></div></div>
        {/* right side */ }
        <div>
          <div>Lukas Bunat</div>
          <div>{ currentProfession }</div>
        </div>
      </div>
    </section >
  );
}

export default Cover;
