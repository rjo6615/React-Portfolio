import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <center>
    <Form className="px-4" style={{ maxWidth: 500, minHeight: 315, backgroundColor: "lightGray", borderRadius: 25}}>
      <Form.Group className="mb-3 pt-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter message" />
      </Form.Group>

      <Button className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  );
}

export default Contact;