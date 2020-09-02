import React from 'react';

function CertificatesTableRow ({ prop }) {
  return (
    <>
      <tr>
        <td>{ prop.name }</td>
      </tr>
      { prop.info.map((item, i) => (
        <tr key={ i }>
          <td>{ item }</td>
        </tr>
      ))
      }
      <tr>
        <td>
          <a href={ prop.img }>
            <img src={ prop.preview } alt="certificate"></img>
          </a>
        </td>
      </tr>
    </>
  );
}

export default CertificatesTableRow;
