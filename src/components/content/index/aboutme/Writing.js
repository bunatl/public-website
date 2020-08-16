import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import BlogLink from './BlogLink';

function Writing () {
    const [ englishArticles ] = useState([
        { text: "✈ Travel", link: "/blog" },
        { text: "🆘 Prague Guide", link: "/blog" }
    ]);

    const [ genArticles ] = useState([
        { text: "🎓 Education", link: "/test" },
        { text: "🧑 Personal", link: "/blog" },
        { text: "📖 Readings", link: "/blog" },

    ]);

    return (
        <div id="aboutMeWriting">
            <div>
                <h3>I also write about stuff...</h3>
            </div>

            <div>In Czech and English:</div>
            <div className="genWriting">
                <ListGroup horizontal >
                    { genArticles.map((value, index) => (
                        <BlogLink key={ index } prop={ value } />
                    )) }
                </ListGroup>
            </div >

            <div>And purely in English:</div>
            <div className="englishWriting">
                <ListGroup horizontal>
                    { englishArticles.map((value, index) => (
                        <BlogLink key={ index } prop={ value } />
                    )) }
                </ListGroup>
            </div >
        </div >
    );
}

export default Writing;
