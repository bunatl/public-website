import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import TableRow from './tableRows/WorkTableRow';

function Internships () {
  const [ internships ] = useState([
    {
      employer: "Comillas Pontifical University",
      position: "Big Data Architect Trainee",
      technologies: "Hadoop, PySpark, Python, Jupiter",
      location: "Madrid, Spain",
      timePeriod: "10/2017 - 12/2017",
      description: [
        "I work as an intern discovering patterns in a given data set (Energy Use in Spanish Regional Areas) using PySpark (Python and Spark).",
        "My job was to clean and prepare the data, store them in an appropriate way to a database and finally via DB queries try to find information and patterns in this particular data set.",
        "It required understanding how big data are stored and what advantages different approaches can offer.",
        "The output of the internship was a report describing my progress through the internship as well as visualizing my findings."
      ]
    },
    {
      employer: "Kyungpook National University",
      position: "Network Engineer Trainee",
      technologies: "Network simulations, COOJA Simulator",
      location: "Daegu, South Korea",
      timePeriod: "03/2017 - 06/2017",
      description: [
        "As an intern, my goal was to explore and simulate different network schemas given to me by my supervisor on COOJA simulator. My findings were later used together with other input of the other Korean student by our supervisor on his own, more complex and wider, research.",
        "The second goal was to promote and strengthen the relationship between international students and local Korean students who were working in the same lab on their's respective projects."
      ]
    }
  ]);

  return (
    <section>
      <h2><span role="img" aria-labelledby="ruller">📐 </span>Internships</h2>
      { internships.map((value, index) => (
        <Table striped bordered hover responsive key={ index }>
          <tbody>
            <TableRow prop={ value } />
          </tbody>
        </Table>
      )) }
    </section>
  );
}

export default Internships;
