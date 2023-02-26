import React from "react";
import Card from 'react-bootstrap/Card';
import './about.css';

const About = () => {
    return (
    <center>
    <Card className="styles" style={{ maxWidth: '50rem', marginBottom: '200px'}}>
      <Card.Img className="mx-auto" style={{ marginBottom: '50px', marginTop: '15px', maxWidth: '10rem', borderRadius: '100px'}} variant="top" src="./images/profile-pic.jpg" />
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
        I am currently learning to become a full stack web developer. I have been interested in web design 
        and development for years taking classes in the past. I am also interested in computer and tech repair
        having worked at a computer refurbishing company as well as UbreakIfix. I have accumulated a lot of knowledge
        in tech and will continue to learn more in the coming months and years as I hope to start a career. 
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
  );
};

export default About;