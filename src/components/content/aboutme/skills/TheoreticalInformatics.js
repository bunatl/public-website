import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';

function TheoreticalInformatics () {
    const [ rows ] = useState([
        { math: "Linear Algebra", compArch: "Data/number representation", alg: "Sorting Algorithm" },
        { math: "Limits, Sequence", compArch: "Operating System managment", alg: "Graph Algorithm" },
        { math: "Calculus Functions", compArch: "CPU, cache managment", alg: "P, NP problems" },
        { math: "Discreate Mathematics", compArch: "Multitasking", alg: "Time/Space Complexity" },
        { math: "Mathematical logic", compArch: "Multithreading", alg: "Recursion, Efficiency" },
    ]);

    return (
        <div>
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        <th>Mathematics</th>
                        <th>Computer Architecture</th>
                        <th>Algorithms</th>
                    </tr>
                    { rows.map((item, i) => (
                        <tr key={ i }>
                            <td>{ item.math }</td>
                            <td>{ item.compArch }</td>
                            <td>{ item.alg }</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    );
}

export default TheoreticalInformatics;
