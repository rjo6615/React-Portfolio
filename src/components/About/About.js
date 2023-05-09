import React from "react";
import Card from 'react-bootstrap/Card';
import './about.css';

const About = () => {
    return (
    <center>
    <Card className="styles" style={{ maxWidth: '50rem', marginBottom: '200px'}}>
      <Card.Img className="mx-auto" style={{ marginBottom: '50px', marginTop: '15px', maxWidth: '10rem', borderRadius: '100px'}} variant="top" src="./images/profile-pic.jpg" />
      <h1>Robert J. Obernier</h1>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
        I am currently looking for a career as a full stack web developer.
        I have been interested in web design and development for years taking many courses in the past. 
        I am also interested in computer and tech repair having worked at a computer refurbishing company as well as UbreakIfix.
        I have accumulated a lot of knowledge in tech and will continue to add to my knowledge for years to come.

        </Card.Text>
      </Card.Body>
    </Card>
    </center>
  );
};

export default About;