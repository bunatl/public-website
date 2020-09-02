import React, { useState } from 'react';

// import FormFile from 'react-bootstrap/FormFile'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function HireMe () {
  const [ validated, setValidated ] = useState(false);

  const handleSubmit = event => {
    if (event.currentTarget.checkValidity() === false) {
      alert("fal;se");
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const { name, phone, email, text } = event.currentTarget;

      window.Email.send({
        SecureToken: "bfe0bbfd-d85a-4861-8244-7060f295e5d8",
        To: 'bunatl@seznam.cz',
        From: 'bunatl@centrum.cz',
        Subject: name,
        Body: `${ text }\n${ email }\n${ phone }`
      }).then(
        message => alert(message)
      );

      setValidated(true);
    }
  };

  return (
    <section>
      <div id="contactForms">
        <h2>Contact me</h2>
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span style={ { fontWeight: "bold" } }>Name</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="Lukas Bunat"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span role="img" aria-label="phone emoji">📧</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@domain.com"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <span role="img" aria-label="phone emoji">📞</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="phone"
                defaultValue={ "+420 " }
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="contactMeTextArea">
            <Form.Control
              required
              as="textarea"
              name="text"
              placeholder="Leave me a message here..."
              style={ { height: "100%" } }
            />
          </Form.Group>

          <div id="buttonWrapper">
            <Button type="submit">Submit form</Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default HireMe;
