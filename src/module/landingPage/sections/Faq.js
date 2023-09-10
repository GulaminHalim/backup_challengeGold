import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import CarImage from "../../../assets/img/img_car.png";

export default function Faq(props) {
  /*
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  */

  return (
    <Container>
      <br></br>
      <br></br>

      <Row>
        <Col>
          <div>
            <h4>Frequently Asked Question</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </Col>
        <Col>
          <div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the first item&#39;s accordion body.</strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>,
                  though the transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the second item&#39;s accordion body.</strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>,
                  though the transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the third item&#39;s accordion body.</strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>,
                  though the transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the third item&#39;s accordion body.</strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>,
                  though the transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan
                </Accordion.Header>
                <Accordion.Body>
                  <strong>This is the third item&#39;s accordion body.</strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>,
                  though the transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}
