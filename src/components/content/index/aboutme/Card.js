import React from 'react';

import Card from 'react-bootstrap/Card';

import resumeLink from '../../../../assests/pdf/resume.pdf';
import avatar from '../../../../assests/images/profilePhoto.jpg';

function BioCard () {
  const cardStyle = {
    color: "black",
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "center"
  };

  return (
    <Card id="aboutMeCard">
      <Card.Img variant="top" src={ avatar } />
      <Card.Body>
        <Card.Title>Lukas Bunat</Card.Title>
        <Card.Text>
          <i>Full-Stack & Software developer</i>
        </Card.Text>

        <Card.Header style={ { textAlign: "center" } }>
          <Card.Link style={ cardStyle } href={ resumeLink }>Have a look at my CV <span role="img" aria-label="cvIcon">📄</span></Card.Link>
        </Card.Header>

        <div id="cardButtons">
          <div><a href="/aboutMe">About me</a></div>
          <div><a href="#contactForms">Hire me!</a></div>
        </div>
      </Card.Body>
    </Card >
  );
}

export default BioCard;
