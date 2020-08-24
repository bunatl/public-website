import React from 'react';

function TutorialContent ({ prop, filter }) {
    return (
        <tr>
            <td style={ { fontWeight: "bold", fontSize: "1.25em", textAlign: "center" } }>{ prop.title }</td>
            <td>
                { prop.questions
                    .filter(x => {
                        // check if subarray contains filter text
                        let isPresent = false;
                        // x.minor => array of string
                        for (const y of x.minor)
                            if (filter !== "" && y.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                                isPresent = true;
                                // once the item is discovered, there is no need to continue the search
                                break;
                            }
                        return (
                            // filter is used
                            (filter === undefined || filter === "") ||
                            // search term is in the inner array
                            isPresent ||
                            // filter include this header
                            (x.main.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
                        );
                    })
                    .map((item, i) => (
                        <span key={ i }>
                            <span style={ { fontWeight: "bold" } }>{ item.main }</span>
                            <ul>
                                { item.minor
                                    .filter(x => {
                                        return (
                                            (filter === undefined || filter === "") ||
                                            (x.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
                                        );
                                    })
                                    .map((innerItem, j) => (
                                        <li key={ j } style={ { fontStyle: "italic" } }>{ innerItem }</li>
                                    )) }
                            </ul>
                        </span>
                    )) }
            </td>
        </tr>
    );
}

export default TutorialContent;
