import React from 'react';

import cvPdf from '../../../assests/pdf/resume.pdf';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import SocialMedias from '../../shared/SocialMedia';
import avatar from '../../../../src/assests/images/profilePhoto.jpg';

function AboutMeSection () {
  return (
    <section id="aboutMeSection">
      {/* text about me */ }
      <div style={ { textAlign: "justify", marginRight: "2em" } }>
        <h2><span role="img" aria-labelledby="hello">🙋‍♂️ </span>Few words about me</h2>
        <p>I am a tech enthusiastic born in Prague, Czech Republic. I have had studied at many different universities all over the world and I take great pride in my international experience. It showed and taught me different approaches on how to deal with problems. I believe in learning by mistakes and simply by trying. I also like to share my opinions - on my website. I always do my best to achieve my dreams and goals. Because no one else would do it for me. Over time I found out that I can easily learn new things and make a good decision. I believe it is also thanks to my vast knowledge.
        </p>
        <p>
          I started as a software developer with languages such as C, C++ and JAVA where the main objectives were speed, efficiency and design patterns. Later, I have found my passion for Full-Stack and since then I put my focus into web development. In the future, I want to learn blockchain technologies. I do see huge potential in these technologies. On the other hand, in almost every application, there is a need for data processing and management. Therefore my knowledge about data storing in data warehouses, getting information/knowledge through BI or Knowledge Discovery in Databases/Datasets. And lastly, of course, cornerstone language for data - SQL/No-SQL.
        </p>
        <p>
          I don't just code, I have a wide range of analytics and systematic skills that helps me finding clever solutions for improving/creating optimal programs.
</p>
      </div>

      {/* aside info card about me */ }
      <Card id="aboutMePageCard">
        <Card.Img variant="top" src={ avatar } />
        <Card.Body>
          <Card.Title>Lukas Bunat</Card.Title>
          <Card.Text style={ { fontStyle: "italic" } }>
            { "Software & Full-Stack Developer \n Data Engineer" }
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item><a href={ cvPdf }><span role="img" aria-labelledby="page">📄 </span>Resume</a></ListGroup.Item>
            <ListGroup.Item><a href="/Portfolio">Portfolio projects</a></ListGroup.Item>
            <ListGroup.Item><SocialMedias /></ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

    </section>
  );
}

export default AboutMeSection;
