import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles.css";

function Personal() {
  return (
    <Jumbotron fluid>
      <Container>
        <Image
          className="dan"
          src="https://i.ibb.co/K2D8HLP/Dan-Profile.jpg"
          fluid
          href="https://example.com"
        />
        <h1>About Me: </h1>
        <p className="bio-text">
          Welcome to my portfolio! My name is Dan Chiev and if you landed
          yourself here, you might as well spend some time here! I am a current
          student and Penn's LPS Web Development Bootcamp and am honing my
          skills as a web developer.
        </p>
        <p className="bio-text">
          On my portfolio, you'll find some of my recent coding work throughout
          the program. As the program is still ongoing, make sure to visit my
          website regularly for the latest updates. You'll also find some of my
          past work as a student filmmaker, and social media specialist
          throughout my professional career.
        </p>
        <p className="bio-text">
          {" "}
          If you have any questions or would love to work with me, hit the
          contact button button on the nav and let's get in touch! Thank you!
        </p>
        <ListGroup>
          <ListGroup.Item disabled>Contact:</ListGroup.Item>
          <ListGroup.Item>Email: Danchiev2@gmail.com</ListGroup.Item>
          <a href="https://github.com/dchiev">
            <ListGroup.Item>Git Hub: dchiev</ListGroup.Item>{" "}
          </a>
        </ListGroup>
      </Container>
    </Jumbotron>
  );
}
export default Personal;
