import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import TableRow from './tableRows/WorkTableRow';

function Work () {
  const [ jobs ] = useState([ {
    employer: "O2 Czech Republic a.s.",
    position: "Video Specialist",
    technologies: "JAVE EE, C++, Bash",
    location: "Prague, Czech Republic",
    timePeriod: "05/2018 - 05/2019",
    description: [
      "My main objective was to maintain and develop applications for the O2TV platform and OS for O2 set-top box.",
      "My applications supported the O2TV platform. They were either full-stack or backend, written predominantly in JAVA EE (and SE), JS and C. I also partially collaborated with my colleagues on their respective projects.",
      "O2TV platform is built-in in every O2 set-top box as well as available online on https://www.o2tv.cz/.",
      "A recommendation letter from my supervisor (written in Czech) is available here"
    ]
  },
  {
    employer: "Self-Employed",
    position: "Paper-Form Blueprints Convert",
    technologies: "AutoCAD, Autodesk Inventor",
    location: "Prague, Czech Republic",
    timePeriod: "09/2014 - 03/2015",
    description: [
      "I had been drawing digital 2D blueprints in AutoCAD based on a given template.",
      "Blueprints were mostly flats and buildings before reconstruction therefore there was a need to convert their old paper blueprints into a digital form."
    ]
  }
  ]);

  return (
    <section id="work">
      <h2><span role="img" aria-labelledby="work">💼 </span>Work</h2>
      { jobs.map((value, index) => (
        <Table striped bordered hover responsive key={ index }>
          <tbody>
            <TableRow prop={ value } />
          </tbody>
        </Table>
      )) }
    </section>
  );
}

export default Work;
