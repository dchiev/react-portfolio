import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import "./styles.css";

function Projects() {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <a href="https://github.com/dchiev/Fridge-Recipe-App.git">
            <Image
              className="fridge-image"
              src="https://i.ibb.co/SdzMgqs/Fridge-Recipe-App.jpg"
              fluid
            />
            <h2>Fridge Recipe App</h2>
          </a>
        </Col>
        <Col>
          {" "}
          <a href="https://github.com/dchiev/Note-Taker">
            <Image
              className="p-image"
              src="https://i.ibb.co/Snhwq7X/Note-Taker.gif"
            />
            <h2>Note Taker</h2>
          </a>
        </Col>
        <Col>
          {" "}
          <a href="https://github.com/dchiev/JavaScript-Quiz">
            <Image
              className="p-image"
              src="https://i.ibb.co/P4HqWWc/quiz1.png"
            />
            <h2>JS Quiz</h2>
          </a>
        </Col>
      </Row>{" "}
      <Row>
        <Col>
          {" "}
          <a href="https://github.com/dchiev/Weather-Dashboard">
            <Image
              className="p-image"
              src="https://i.ibb.co/xH3g06S/weather-dashboard.png"
            />
            <h2>JS Quiz</h2>
          </a>
        </Col>
        <Col>
          {" "}
          <a href="https://github.com/dchiev/Password-Generator">
            <Image
              className="p-image"
              src="https://i.ibb.co/fqR1t7p/password-generator.png"
            />
            <h2>Password Generator</h2>
          </a>
        </Col>
        <Col>
          {" "}
          <a href="https://github.com/dchiev/Day-Planner">
            <Image
              className="p-image"
              src="https://i.ibb.co/SXTRNXq/app-image.png"
            />
            <h2>Day Planner</h2>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Projects;
