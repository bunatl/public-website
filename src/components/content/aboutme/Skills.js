import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';

import Programming from './skills/Programming';
import Software from './skills/Software';
import TheoreticalInformatics from './skills/TheoreticalInformatics';
import SoftSkills from './skills/SoftSkills';

function Skills () {
    const [ navItems ] = useState([
        "Programming", "Software", "Theoretical Informatics", "Soft Skills"
    ]);
    // defaultActiveKey is 0 => default content is Programming
    const [ navContent, setNavContent ] = useState(<Programming />);

    const changeNavContent = eventKey => {
        const listOfNavContent = [
            <Programming />,
            <Software />,
            <TheoreticalInformatics />,
            <SoftSkills />
        ];

        setNavContent(listOfNavContent[ eventKey ]);
    };

    return (
        <section id="skills">
            <h2><span role="img" aria-labelledby="toolSet">🛠 </span>Skill set</h2>
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

export default Skills;
