import React, { useState, useEffect, useRef } from 'react';

import Button from 'react-bootstrap/Button';

function BlogPostList ({ prop, name, textFilter }) {
    const [ toogled, setToogled ] = useState(true);

    // use useRef to make a reference to an object: https://www.youtube.com/watch?v=W6AJ-gRupCs
    // although component is redered 3 times for each array instance, I can focus each one individually
    const currentButton = useRef();

    useEffect(() => {
        toogled ?
            currentButton.current.classList.add("active") :
            currentButton.current.classList.remove("active");
    }, [ toogled ]);

    return (
        <div>
            <Button
                className="topicListButton"
                variant="outline-dark"
                ref={ currentButton }
                onClick={ (e) => toogled ? setToogled(false) : setToogled(true) }
            >
                { name }
            </Button>

            <ul className={ `${ name }, topicList` }>
                {/* Main topics */ }
                { prop
                    .filter(x => {
                        let subItem = false;

                        for (const y of x.children)
                            if (y.name.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1) {
                                subItem = true;
                                break;
                            }

                        return (
                            toogled && (
                                (textFilter === "" || textFilter === undefined) || subItem ||
                                (x.mainTopic.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1)
                            )
                        );
                    })
                    .map((item, i) => (
                        <li key={ i }><span>{ item.mainTopic }</span>
                            {/* sublist */ }
                            <ul>
                                { item.children
                                    .filter(x => {
                                        // check if header cotains filtered text -> if true - all subitems need to be printed
                                        const isHeader = item.mainTopic.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1 ? true : false;
                                        return (
                                            toogled && (
                                                (textFilter === "" || textFilter === undefined) || isHeader ||
                                                (x.name.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1)
                                            )
                                        );
                                    })
                                    .map((itemChild, iChild) => (
                                        <a key={ iChild } href={ itemChild.link }>
                                            <li>{ itemChild.name }</li>
                                        </a>
                                    )) }
                            </ul>
                        </li>
                    )) }
            </ul>
        </div>
    );
}

export default BlogPostList;;
