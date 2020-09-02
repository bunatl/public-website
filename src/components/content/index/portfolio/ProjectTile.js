import React from 'react';

// {prop} = props.prop => compoment propbs and passed variable
function ProjectTile ({ prop }) {
    return (
        <div>
            {/* Name */ }
            <div>{ prop.name }</div>
            <div><a href="/Portfolio">More info</a></div>
            {/* Picture */ }
            <div>
                <img src={ prop.preview } alt={ "Preview" }></img>
            </div>
            {/* Code, demo */ }
            <div>
                <div>
                    { prop.github.icon }{ ' ' }
                    <a href={ prop.github.link }>GitHub</a>
                </div>
                <div>
                    { prop.demo.icon }{ ' ' }
                    <a href={ prop.demo.link }>Live Demo</a>
                </div>
            </div>
            {/* Description */ }
            <div>{ prop.description }</div>
            {/* Technologies */ }
            <div>
                { prop.technologies.map((tech, index) => (
                    <div key={ index }>{ tech.icon } { ' ' } { tech.name }</div>
                )) }
            </div>
        </div>
    );
}

export default ProjectTile;
