import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import "../../../styles/styles.css";

function Testimony() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h3 className="text-center">Testimonial</h3>
      <p className="text-center">Berabagi review dari para pelanggan kami </p>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Card className="card_width">
            <Card.Header>Quote aja tau</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”{" "}
                </p>
                <footer className="blockquote-footer">
                  John Dee 32, Bromo <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card_width">
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”{" "}
                </p>
                <footer className="blockquote-footer">
                  John Dee 32, Bromo <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card_width">
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”{" "}
                </p>
                <footer className="blockquote-footer">
                  John Dee 32, Bromo <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Testimony;
