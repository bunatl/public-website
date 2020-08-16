import React from 'react';

// {prop} = props.prop => compoment propbs and passed variable
function ProjectTile ({ prop }) {
    return (
        <div style={ { minHeight: "27em" } }>
            {/* Name */ }
            <div style={ { margin: ".5em auto 0 auto" } }>{ prop.name }</div>
            <div><a href="/Portfolio">More info</a></div>
            {/* Picture */ }
            <div style={ { height: "12.5em" } }>
                <img src={ prop.preview } alt={ "Preview" } style={ { maxHeight: "100%" } }></img>
            </div>
            {/* Code, demo */ }
            <div style={ { margin: ".5em auto" } }>
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
            <div style={ { marginBottom: "1em", fontStyle: "italic" } }>{ prop.description }</div>
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
