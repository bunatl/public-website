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
        <section id="hireMeCooperation">
            <h2>Business cooperation contracting</h2>
            <article>I am always happy to hear a collaboration proposal from individuals as well as companies in fields of my interest. Mainly in: </article>

            {/* to extentd table to 100% had to wrap table to a wrapper: https://stackoverflow.com/questions/28339119/bootstrap-table-wont-fill-container-width/42452287 */ }
            <div className="table-responsive">
                <Table
                    striped
                    bordered
                    hover
                    className="table table-striped table-bordered table-hover"
                    style={ { textAlign: "center" } }
                >
                    <thead>
                        <tr>
                            <th><span>Full-Stack projects</span></th>
                            <th><span>Websites</span></th>
                            <th><span>Software Development</span></th>
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
            </div>
        </section>
    );
}

export default HireMeSection;
