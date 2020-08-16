import React, { useState } from 'react';

// import FormFile from 'react-bootstrap/FormFile'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function HireMe () {
  const [ validated, setValidated ] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <section>
      <div id="contactForms">
        <h2>Contact me</h2>
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  <b>Name</b>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                type="text"
                placeholder="Lukas Bunat"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text
                  id="basic-addon3"
                >
                  <span role="img" aria-label="phone emoji">📧</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
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
                defaultValue={ "+420 " }
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="contactMeTextArea">
            <Form.Control
              required
              as="textarea"
              placeholder="Leave me a message here..."
              style={ { height: "100%" } }
            />
          </Form.Group>

          <Button
            type="submit"
            style={ { width: "27.5%", minWidth: "8em", margin: "0 auto" } }>
            Submit form
        </Button>
        </Form>
      </div>
    </section>
  );
}

export default HireMe;
