import React, { useState, useEffect } from 'react';

import CountUp from 'react-countup';

// good video about react hooks: https://www.youtube.com/watch?v=j1ZRyw7OtZs
function Stats () {
  const [ counters ] = useState([
    { prefix: "Till this day", suffix: "coffees drunk", start: 682, end: 0, duration: 3 },
    { prefix: "Somewhere around", suffix: "lines of code written", start: 1, end: 1635689, duration: 10 },
    { prefix: "Exactly", suffix: "km  traveled", start: 1, end: 124625, duration: 6 }
  ]);
  const [ shown, setShown ] = useState(0);

  useEffect(() => {
    // show running numbers only once, shown has to be in Counter key - to force remount
    const activateCounters = () => (shown <= 2) ? setShown(shown + 1) : '';

    // listner are added to section above and below
    document.getElementById('indexPortfolio').addEventListener('mouseenter', activateCounters);
    document.getElementById('indexPortfolio').addEventListener('touchmove', activateCounters);

    document.getElementById('map').addEventListener('mouseenter', activateCounters);
    document.getElementById('map').addEventListener('touchmove', activateCounters);
    return () => {
      // cleanup - removes listener 
      document.getElementById('indexPortfolio').removeEventListener('mouseenter', activateCounters);
      document.getElementById('indexPortfolio').removeEventListener('touchmove', activateCounters);

      document.getElementById('map').removeEventListener('mouseenter', activateCounters);
      document.getElementById('map').removeEventListener('touchmove', activateCounters);
    };
  }, [ shown ]);

  return (
    // key will update on wheel event
    <section id="stats">
      {
        counters.map((value, index) => (
          <Counter key={ index + shown } props={ value } />
        ))
      }
    </section >
  );
}

export function Counter ({ props }) {
  return (
    <div className="counter">
      <span>{ props.prefix }</span>
      <CountUp
        start={ props.start }
        end={ props.end }
        duration={ props.duration }
        separator=" "
        redraw={ true }
        useEasing={ true } />
      <span>{ props.suffix }</span>
    </div>
  );
}

export default Stats;
