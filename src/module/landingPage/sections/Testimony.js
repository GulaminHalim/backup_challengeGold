import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import "../../../styles/styles.css";
import img_photo from "../../../assets/img/img_photo.png";
import img_photo2 from "../../../assets/img/img_photo2.png";
import Rate from "../../../assets/img/Rate.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Testimony() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h3 className="text-center">Testimonial</h3>
      <p className="text-center">Berbagi review dari para pelanggan kami </p>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Card className="card_width" id="resp_size1">
            <Card.Body>
              <Container>
                <Row>
                  <Col sm={1}>
                    <Image src={img_photo} />
                  </Col>
                  <Col sm={11}>
                    <Image src={Rate} />
                    <blockquote className="blockquote mb-0" inline>
                      <p>
                        {" "}
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”{" "}
                      </p>

                      <footer className="blockquote-footer">
                        John Dee 32, Bromo <cite title="Source Title"></cite>
                      </footer>
                    </blockquote>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card_width" id="resp_size1">
            <Card.Body>
              <Container>
                <Row>
                  <Col sm={1}>
                    <Image src={img_photo2} />
                  </Col>
                  <Col sm={11}>
                    <Image src={Rate} />
                    <blockquote className="blockquote mb-0" inline>
                      <p>
                        {" "}
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”{" "}
                      </p>

                      <footer className="blockquote-footer">
                        Jennifer Dee 32, Bromo{" "}
                        <cite title="Source Title"></cite>
                      </footer>
                    </blockquote>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card_width" id="resp_size1">
            <Card.Body>
              <Container>
                <Row>
                  <Col sm={1}>
                    <Image src={img_photo} />
                  </Col>
                  <Col sm={11}>
                    <Image src={Rate} />
                    <blockquote className="blockquote mb-0" inline>
                      <p>
                        {" "}
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”{" "}
                      </p>

                      <footer className="blockquote-footer">
                        John Dee 32, Bromo <cite title="Source Title"></cite>
                      </footer>
                    </blockquote>
                  </Col>
                </Row>
              </Container>
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
