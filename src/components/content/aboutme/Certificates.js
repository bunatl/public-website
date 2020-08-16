import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import TableRow from './tableRows/CertificatesTableRow';

// import fullsize certificates
import autocad from '../../../assests/images/certificates/autocad_certificate.jpg';
import cisco from '../../../assests/images/certificates/cisco_certificate.jpg';
import inventor from '../../../assests/images/certificates/inventor_certificate.jpg';

// import preview certificates
import previewAutocad from '../../../assests/images/certificates/previews/autocad_certificate.jpg';
import previewCisco from '../../../assests/images/certificates/previews/cisco_certificate.jpg';
import previewInventor from '../../../assests/images/certificates/previews/inventor_certificate.jpg';

function Certificates () {
  const [ certificates ] = useState([
    { name: "CISCO Networking Academy", info: [ "Network Fundamentals course", "obtained in 11/2013" ], img: cisco, preview: previewCisco },
    { name: "AutoCAD", info: [ "100 hours course", "obtained in 01/2014" ], img: autocad, preview: previewAutocad },
    { name: "Autodesk Inventor", info: [ "100 hours course", "obtained in 01/2014" ], img: inventor, preview: previewInventor }
  ]);

  return (
    <section>
      <h2><span role="img" aria-labelledby="trophy">🏆 </span>Certificates</h2>
      <div id="certificates">
        { certificates.map((value, index) => (
          <Table striped
            bordered
            hover
            responsive
            key={ index }
          >
            <tbody>
              <TableRow prop={ value } />
            </tbody>
          </Table>
        )) }
      </div>
    </section>
  );
}
export default Certificates;
