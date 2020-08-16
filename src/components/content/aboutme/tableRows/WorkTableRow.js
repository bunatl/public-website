import React from 'react';

import { GoLocation } from "react-icons/go";

function TableRow ({ prop }) {
  return (
    <>
      <tr>
        <td colSpan={ 2 } style={ { fontWeight: "bold", fontSize: "1.2em" } }>{ prop.employer }</td>
      </tr>
      <tr>
        <td style={ { fontSize: "1.1em", paddingLeft: "3em", verticalAlign: "middle" } }>{ prop.position }</td>
        <td rowSpan={ 5 } style={ { width: "65%", paddingRight: "2em" } }>
          <ul>
            { prop.description.map((item, i) => (
              <li key={ i } style={ { marginBottom: ".6em", textAlign: "justify" } }>{ item }</li>
            )) }
          </ul>
        </td>
      </tr>
      <tr>
        <td style={ { paddingLeft: "3em", verticalAlign: "middle" } }>{ prop.timePeriod }</td>
      </tr>
      <tr>
        <td style={ { paddingLeft: "3em", verticalAlign: "middle" } }><GoLocation /> { prop.location }</td>
      </tr>
      <tr>
        <td style={ { paddingLeft: "3em", verticalAlign: "middle", fontStyle: "italic" } }>{ prop.technologies }</td>
      </tr>
    </>
  );
}

export default TableRow;
