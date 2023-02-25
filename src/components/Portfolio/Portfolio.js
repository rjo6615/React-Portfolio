import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    const projects = [
        {
            name: "G.R.I.M.S",
            description: "Inventory management system",
            link: "https://grims-inventory.herokuapp.com/",
            image: "./images/grims.jpg" 
        },
        {
            name: "Rainy Day Movies",
            description: "Movie info lookup",
            link: "//emilybernard.github.io/rainy-day-movies/",
            image: "./images/rainy-day-movies.jpg" 
        },
        {
            name: "Weather Dashboard",
            description: "5 day weather forcast look up",
            link: "//rjo6615.github.io/Weather-Dashboard/",
            image: "./images/weather-dashboard.jpg" 
        },
        {
            name: "Code Quiz",
            description: "A timed coding quiz",
            link: "//rjo6615.github.io/Code-Quiz/",
            image: "./images/code-quiz.jpg" 
        },
        {
            name: "Password Generator",
            description: "Unique password generator",
            link: "//rjo6615.github.io/Password-Generator/",
            image: "./images/password-generator.jpg" 
        },
        {
            name: "Work Day Scheduler",
            description: "Work scheduling calendar",
            link: "https://rjo6615.github.io/Work-Day-Scheduler/",
            image: "./images/work-day-scheduler.jpg"  
       },
      ];
    return (
      <center className="bg-light pb-4">
      <Row xs={1} md={2} lg={3} className="g-4 mx-4">
        {projects.map((el) => (         
          <Col>
          <a href={el.link} >
            <Card style={{ maxWidth: 500, minHeight: 450, maxHeight: 350, backgroundColor: "lightGray"}}>
              <Card.Img style={{ maxWidth: 500, minHeight: 350, maxHeight: 350 }} variant="top" src={el.image} />              
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                {el.description}
                </Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>
          ))}
      </Row>
      </center>
    );
}

export default Portfolio;