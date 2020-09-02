import React, { useState } from 'react';

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
            <div>I also write about stuff...</div>

            <div>In Czech and English:</div>
            <div className="genWriting">
                { genArticles.map((value, index) => (
                    <div key={ index }>
                        <a href={ value.link }>{ value.text }</a>
                    </div>
                )) }
            </div >

            <div>And purely in English:</div>
            <div className="englishWriting">
                { englishArticles.map((value, index) => (
                    <div key={ index }>
                        <a href={ value.link }>{ value.text }</a>
                    </div>
                )) }
            </div >
        </div >
    );
}

export default Writing;
