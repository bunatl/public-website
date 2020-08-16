import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";

import MapChart from './map/MapChart';

function Map () {
  const [ content, setContent ] = useState("");
  return (
    <section id="map">
      {/* some info */ }
      <h2 style={ { textAlign: 'center', } }>I like to track places I have visited <span role="img" aria-label="travel icons">✈🌍</span></h2>
      {/* Area of the actual map */ }
      <MapChart setTooltipContent={ setContent } />
      <ReactTooltip>{ content }</ReactTooltip>
    </section>
  );
}

export default Map;
