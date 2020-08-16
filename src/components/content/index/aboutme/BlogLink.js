import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function BlogLink ({ prop }) {
  return (
    <ListGroup.Item style={ { marginRight: ".5em" } }>
      <Link to={ prop.link }>
        { prop.text }
      </Link>
    </ListGroup.Item>
  );
}

export default BlogLink;
