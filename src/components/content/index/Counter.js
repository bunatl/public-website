import React from 'react';

import CountUp from 'react-countup';

function Counter ({ props }) {
  return (
    <div className="counter">
      { props.prefix }
      <br></br>
      <CountUp
        start={ props.start }
        end={ props.end }
        duration={ 3.5 }
        separator=" "
        redraw={ true }
        useEasing={ true } />
      <br></br>
      { props.suffix }
    </div>
  );
}

export default Counter;
