import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import TableRow from './tableRows/EducationTableRow';

// Unis icons
import uoe from "../../../assests/images/universities/uoeTransparent.png";
import ctu from "../../../assests/images/universities/ctuTransparent.png";
import vsfs from "../../../assests/images/universities/vsfsTransparent.png";
import knu from "../../../assests/images/universities/knuTransparent.png";
import iitm from "../../../assests/images/universities/iitmTransparent.png";
import tudelft from "../../../assests/images/universities/tudelftTransparent.png";
import spsst from "../../../assests/images/universities/spsstTransparent.png";
import zsBarr from "../../../assests/images/universities/zbBarrTransparent.png";

function Education () {
  const [ unis ] = useState([
    {
      url: "https://www.vse.cz/english/",
      ico: uoe,
      university: "University of Economics",
      faculty: "Faculty of Informatics and Statistics",
      program: "Information Systems and Technologies",
      location: "Prague, Czech Republic",
      timePeriod: "06/2019 - Present"
    },
    { url: "https://www.cvut.cz/en/", ico: ctu, university: "Czech Technical University", faculty: "Faculty of Electrical Engineering", program: "Open Informatics", location: "Prague, Czech Republic", timePeriod: "06/2019 - 12/2019" },
    { url: "https://www.vsfs.cz/en/", ico: vsfs, university: "University of Finance and Administration", faculty: "Faculty of Economics", program: "Applied Informatics", location: "Prague, Czech Republic", timePeriod: "09/2018 - 06/2019" },
    { url: "https://en.knu.ac.kr/", ico: knu, university: "Kyungpook National University", faculty: "College of IT Engineering", program: "Exchange studies", location: "Daegu, South Korea", timePeriod: "02/2017 - 06/2017" },
    { url: "https://www.iitm.ac.in/", ico: iitm, university: "Indian Institute of Technology Madras", faculty: "Computer Science and Engineering", program: "Exchange studies", location: "Chennai, India", timePeriod: "08/2016 - 11/2016" },
    { url: "https://www.tudelft.nl/en/", ico: tudelft, university: "Delft University of Technology", faculty: "Computer Science and Engineering", program: "The ATHENS Programme", location: "Deltf, Netherlands", timePeriod: "03/2016 - 03/2016" },
    { url: "https://www.cvut.cz/en/", ico: ctu, university: "Czech Technical University", faculty: "Faculty of Information Technology", program: "Informatics", location: "Prague, Czech Republic", timePeriod: "09/2014 - 06/2018" },
    { url: "https://www.panska.cz/", ico: spsst, university: "Střední průmyslová škola sdělovací techniky", faculty: "High school", program: "Technical Lyceum", location: "Prague, Czech Republic", timePeriod: "09/2010 - 05/2014" },
    { url: "http://www.zsbarr.cz/", ico: zsBarr, university: "Základní škola a Mateřská škola Barrandov", faculty: "Elemetntary School", program: "Advanced mathematics class", location: "Prague, Czech Republic", timePeriod: "09/2001 - 06/2010" }
  ]);

  return (
    <section id="education">
      <h2><span role="img" aria-labelledby="uniHat">🎓 </span>Education</h2>
      { unis.map((value, index) => (
        <Table striped
          bordered
          hover
          id="education"
          responsive key={ index } >
          <tbody>
            <TableRow prop={ value } />
          </tbody>
        </Table>
      )) }
    </section>
  );
}

export default Education;
