import React from "react";
import logo from "../../../assets/img/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { type } from "@testing-library/user-event/dist/type";
import "../../../styles/styles.css";
import SocialFollow from "./SocialFollow";

export default function Footer() {
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col>
          <ul class="list_style">
            <li>
              <a
                href="#our service"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                Our Service
              </a>
            </li>
            <li>
              <a
                href="#Why Us"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#Testimonial"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                Link
              </a>
            </li>
            <li>
              <a
                href="#FAQ"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                FAQ
              </a>
            </li>
          </ul>
        </Col>
        <Col>
          <SocialFollow />
        </Col>
        <Col>
          <p>Copyright Binar 2022</p>
          <a href="#">
            <img src={logo} alt="logoImage" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
