import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';

function Software () {
    const [ rows ] = useState([
        { it: "Tableau", collaboration: "Version-control system", other: "MS Office Suite" },
        { it: "Rapid Miner", collaboration: "JIRA", other: "AutoCAD" },
        { it: "Modelio", collaboration: "Trello", other: "Autodesk Inventor" },
        { it: "Wolfram Aplha", collaboration: "Slack", other: "Linux Ecosystem" }
    ]);

    return (
        <div>
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        <th>IT</th>
                        <th>Collaboration</th>
                        <th>Other</th>
                    </tr>
                    { rows.map((item, i) => (
                        <tr key={ i }>
                            <td>{ item.it }</td>
                            <td>{ item.collaboration }</td>
                            <td>{ item.other }</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    );
}

export default Software;
