import React from 'react';

import { Link } from 'react-router-dom';
// https://material-ui.com/components/tooltips/
import { Tooltip } from '@material-ui/core/';


// Destructuring passed object element - the prop property
function NavigationIcon ({ prop }) {
  return (
    <div>
      <Tooltip leaveDelay={ 300 } title={ prop.tooltip } arrow>
        <Link to={ prop.link }>
          {/* My component imported and stored in Navigation */ }
          { prop.component }
        </Link>
      </Tooltip>
    </div>
  );
}

export default NavigationIcon;