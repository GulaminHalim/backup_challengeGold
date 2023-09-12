import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImgService from "../../../assets/img/img_service.png";
import Desc from "../../../assets/img/desc.png";

export default function OurServices() {
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>

      <Row>
        <Col>
          <Image
            className="resp_size1"
            src={ImgService}
            width="459px"
            alt="Happy Girl image"
            height="428px"
          />
        </Col>
        <Col>
          <Image
            className="resp_size1"
            src={Desc}
            width="468px"
            height="376px"
            alt="desc"
          />
        </Col>
      </Row>
    </Container>
  );
}
