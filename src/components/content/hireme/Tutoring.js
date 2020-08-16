import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';

import Math from './tutoring/Math';
import Programming from './tutoring/Programming';
import Vse from './tutoring/Vse';
import Fit from './tutoring/Fit';
import Vsfs from './tutoring/Vsfs';

function Tutoring () {
    const [ navItems ] = useState([
        "Programování", "Matematika", "ČVUT FIT", "VŠFS", "VŠE"
    ]);
    // defaultActiveKey is 0 => default content is Programming
    // const [ navContent, setNavContent ] = useState(<Programming />);
    const [ navContent, setNavContent ] = useState("Jednotlivé oblasti a témata pro doučování budou doplněna v nejbližší době.");

    const changeNavContent = eventKey => {
        const listOfNavContent = [
            <Programming />,
            <Math />,
            <Fit />,
            <Vsfs />,
            <Vse />
        ];

        setNavContent(listOfNavContent[ eventKey ]);
        setNavContent("Jednotlivé oblasti a témata pro doučování budou doplněna v nejbližší době.");
    };

    return (
        <section>
            <h2>Tutoring</h2>
            <h3>Czech Only Section</h3>

            <Nav justify
                variant="tabs"
                defaultActiveKey="0"
                onSelect={ changeNavContent }
                id="skillsNav"
            >
                { navItems.map((item, i) => (
                    <Nav.Item key={ i }>
                        <Nav.Link eventKey={ i }>{ item }</Nav.Link>
                    </Nav.Item>
                )) }
            </Nav>

            {/* all navContent compoment is wrapped in a div */ }
            { navContent }

        </section>
    );
}

export default Tutoring;
