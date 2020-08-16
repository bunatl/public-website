import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';

function HireMeSection () {
    const [ rows ] = useState([
        { col1: "ReactJS", col2: "Personalized website", col3: "C" },
        { col1: "NodeJS", col2: "Portfolio websites", col3: "C++" },
        { col1: "Express.js", col2: "Funcational websites", col3: "JAVA SE/EE" },
        { col1: "MongoDB", col2: "Wordpress websites", col3: "Task automatization" }
    ]);

    return (
        <section>
            <h2>Business cooperation contracting</h2>
            <article>I am always happy to hear a collaboration proposal from individuals as well as companies in fields of my interest. Mainly in: </article>

            <Table striped
                bordered
                hover
                style={ { textAlign: "center" } }
            >
                <thead>
                    <tr>
                        <th>Full-Stack projects</th>
                        <th>Websites</th>
                        <th>Software Development</th>
                    </tr>
                </thead>
                <tbody>
                    { rows.map((item, i) => (
                        <tr key={ i } style={ {
                            fontSize: "1em",
                            fontWeight: "normal",
                            textAlign: "center"
                        } }>
                            <td>{ item.col1 }</td>
                            <td>{ item.col2 }</td>
                            <td>{ item.col3 }</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </section>
    );
}

export default HireMeSection;
