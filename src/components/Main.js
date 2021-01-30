import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";

function Main() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="image"
          src="https://i.ibb.co/SdzMgqs/Fridge-Recipe-App.jpg"
          fluid
        />
        <Carousel.Caption>
          <h3>Fridge Recipe App</h3>
          <p>
            Don't know what to cook? Try this app and let us know what
            ingredients you have!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="image"
          src="https://i.ibb.co/Snhwq7X/Note-Taker.gif"
        />

        <Carousel.Caption>
          <h3>Note Taker</h3>
          <p>Forget pen and paper with this Note Taker app!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="image" src="https://i.ibb.co/P4HqWWc/quiz1.png" />

        <Carousel.Caption>
          <h3>JavaScript Quiz</h3>
          <p>Test your JavaScript Knowledge with this quiz app!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Main;
