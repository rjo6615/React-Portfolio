import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    const projects = [
        {
            name: "Fit Quest",
            description: "Workout and routine creator",
            tech: "React, MongoDB, Express.js, Node.js, Bootstrap",
            repo: "https://github.com/rjo6615/Fit-Quest",
            link: "https://fitquest.herokuapp.com/",
            image: "./images/fitquest.jpg" 
        },
        {
            name: "G.R.I.M.S",
            description: "Inventory management system",
            tech: "Handlebars, mySQL, Express.js, Node.js, Bootstrap, Cloudinary, EmailJS",
            repo: "https://github.com/Eaponte24/GRIMS",
            link: "https://grims-inventory.herokuapp.com/",
            image: "./images/grims.jpg" 
        },
        {
            name: "Rainy Day Movies",
            description: "Movie info lookup",
            tech: "HTML5, CSS3, YoutubeAPI, Javascript",
            repo: "https://github.com/EmilyBernard/rainy-day-movies",
            link: "//emilybernard.github.io/rainy-day-movies/",
            image: "./images/rainy-day-movies.jpg" 
        },
        {
            name: "Weather Dashboard",
            description: "5 day weather forcast look up",
            tech: "Bootstrap, WeatherAPI, Javascript",
            repo: "https://github.com/rjo6615/Weather-Dashboard",
            link: "//rjo6615.github.io/Weather-Dashboard/",
            image: "./images/weather-dashboard.jpg" 
        },
        {
            name: "Code Quiz",
            description: "A timed coding quiz",
            tech: "Javascript, Bootstrap",
            repo: "https://github.com/rjo6615/Code-Quiz",
            link: "//rjo6615.github.io/Code-Quiz/",
            image: "./images/code-quiz.jpg" 
        },
      ];
    return (
      <center className="pb-4">
        <div class="container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4">
        {projects.map((el) => (         
          <Col>          
            <Card style={{ minWidth: 250, maxWidth: 300, minHeight: 620, maxHeight: 620, backgroundColor: "lightGray"}}>
              <Card.Img className="mx-auto" style={{ marginBottom: '20px', marginTop: '15px', maxWidth: '16rem', borderRadius: '25px'}} variant="top" src={el.image} />              
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                {el.description}
                <br/><br/>
                <h6>Tech Used:</h6>
                {el.tech}
                </Card.Text>
              </Card.Body>
              <a href={el.repo} >
              <button type="button" class="btn btn-sm mb-3 px-5"
							style={{color: "white", backgroundColor: "darkblue", borderRadius: 25}}>
                <strong>View Github Repo</strong></button>
                </a>
              <a href={el.link} >
              <button type="button" class="btn btn-sm mb-3 px-5"
							style={{color: "white", backgroundColor: "darkblue", borderRadius: 25}}>
                <strong>View Live Site</strong></button>
                </a>
            </Card>            
          </Col>
          ))}
      </Row>
      </div>
      </center>
    );
}

export default Portfolio;