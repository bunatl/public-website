import React, { useState, useEffect } from 'react';

import Counter from './Counter';


// good video about react hooks: https://www.youtube.com/watch?v=j1ZRyw7OtZs
function Stats () {
  const [ counters ] = useState([
    { prefix: "Till this day", suffix: "coffees drunk", start: 682, end: 0, duration: 3 },
    { prefix: "Somewhere around", suffix: "lines of code written", start: 1, end: 1635689, duration: 10 },
    { prefix: "Exactly", suffix: "km  traveled", start: 1, end: 124625, duration: 6 }
  ]);

  // in order to remount (update component) its key has be changed
  const [ myKey, setMyKey ] = useState(1);

  useEffect(() => {
    const activateCounters = () => setMyKey(myKey + 1);

    window.addEventListener('scroll', activateCounters);
    return () => {
      // cleanup - removes listener 
      window.removeEventListener('scroll', activateCounters);
    };
  }, [ myKey ]);

  return (
    // key will update on wheel event
    <section className="stats">
      {
        counters.map((value, index) => (
          <Counter key={ index + myKey } props={ value } />
        ))
      }
    </section >
  );
}

export default Stats;
