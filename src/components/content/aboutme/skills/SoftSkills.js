import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';

function SoftSkills () {
    const [ rows ] = useState([
        { quote: "New creative and innovative approaches to problem solving", words: "Creative, innovative approches" },
        { quote: "Very good(cross - culture) communication for constructive teamwork", words: "Cross culture communication" },
        { quote: "Enthusiastic about learning new things and technologies", words: "Love to learning new things" },
        { quote: "Quick decisiveness, good decision - making(even uder pressure), leadership", words: "Good decision making" },
        { quote: "Effective time managment to ensure tasks’ deadlines are met", words: "Effective time managment" },
    ]);

    return (
        <div>
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        <th>Qualities</th>
                        <th style={ { textAlign: "left" } }>Personality</th>
                    </tr>
                    { rows.map((item, i) => (
                        <tr key={ i }>
                            <td style={ { fontWeight: "bold", width: "12%" } }>{ item.words }</td>
                            <td style={ { textAlign: "left" } }>{ item.quote }</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    );
}

export default SoftSkills;
