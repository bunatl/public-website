import React from 'react';

import { GoLocation } from 'react-icons/go';

function EducationTableRow ({ prop }) {
  return (
    <>
      <tr>
        <td rowSpan={ 3 } style={ { width: "20%" } }>
          <a href={ prop.url } target="_blank" rel="noopener noreferrer">
            <img src={ prop.ico } alt="uniIcon" style={ { width: "60%" } }></img>
          </a>
        </td>
        <td colSpan={ 2 } style={ { fontWeight: "bold", fontSize: "1.2em" } }>{ prop.university }</td>
      </tr>
      <tr style={ { fontSize: "1.1em" } }>
        {/* Width is 40% => 100% - 20% = 2x */ }
        <td style={ { width: "40%" } }>{ prop.faculty }</td>
        <td>{ prop.program }</td>
      </tr>
      <tr>
        <td style={ { width: "40%" } }>{ prop.timePeriod }</td>
        <td><span><GoLocation /> { prop.location }</span></td>
      </tr>
    </>
  );
}

export default EducationTableRow;
