import React from 'react';

import Table from 'react-bootstrap/Table';

// react, js es6 / 2017, html5, css3
import { FaReact, FaHtml5, FaNodeJs, FaJava } from 'react-icons/fa';
import { DiJavascript, DiMongodb, DiMysql } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
// express,  node, javee, c#

function Programming () {
  const dbInnerTableStyle = {
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: "2em"
  };

  return (
    <div>
      <Table striped bordered hover responsive>
        <tbody>
          <tr>
            <th>Languages</th>
            <th colSpan={ 3 }>Stack</th>
          </tr>
          <tr style={ { fontSize: "1.2em", fontWeight: "bold" } }>
            <td style={ { fontSize: ".9em", fontWeight: "normal" } }>C</td>
            <td>Front End</td>
            <td>Back End</td>
            <td>Database</td>
          </tr>
          <tr>
            <td>C++</td>
            <td><FaReact /> React 16.8</td>
            <td><FaNodeJs /> node.js</td>
            <td style={ dbInnerTableStyle }>SQL:</td>
          </tr>
          <tr>
            <td>JAVA SE</td>
            <td><DiJavascript /> JS ES6/2017</td>
            <td>express.js</td>
            <td><DiMysql /> MySQL, MS SQL Server</td>
          </tr>
          <tr>
            <td>bash</td>
            <td><FaHtml5 /> HTML5</td>
            <td><FaJava /> JAVA EE</td>
            <td style={ dbInnerTableStyle }>No-SQL:</td>
          </tr>
          <tr>
            <td>AHK</td>
            <td><IoLogoCss3 /> CSS3</td>
            <td>C#</td>
            <td><DiMongodb /> MongoDB, Mongoose</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Programming;
