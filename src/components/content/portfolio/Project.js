import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';

// props structure: name, preview, git, demo, tech[], info[]
function Project ({ prop }) {
    return (
        <section className="project">
            {/* Left Side */ }
            <div>
                {/* Preview */ }
                <div><a href={ prop.preview } target="_blank" rel="noopener noreferrer"><img src={ prop.preview } alt="Project preview"></img></a></div>
                {/* Git and preview */ }
                <div>
                    <div><a href={ prop.github.link } target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></div>
                    <div><a href={ prop.demo.link } target="_blank" rel="noopener noreferrer"><RiComputerLine /> Live demo</a></div>
                </div>
                {/* Technologies */ }
                <div>
                    { prop.technologies.map((tech, index) => (
                        <div key={ index }><a href={ tech.link } target="_blank" rel="noopener noreferrer">{ tech.icon } { ' ' } { tech.name }</a></div>
                    )) }
                </div>
            </div>
            {/* Right Side */ }
            <div>
                {/* Name */ }
                <div>{ prop.name }</div>
                {/* Info */ }
                <div>
                    <ul>
                        { prop.info.map((item, i) => (
                            <li key={ i } style={ { marginBottom: ".3em" } }>{ item }</li>
                        )) }
                    </ul>
                </div>
            </div >

        </section >
    );
}

export default Project;