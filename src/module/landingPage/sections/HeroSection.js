import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarImage from "../../../assets/img/img_car.png";
import { Image } from "react-bootstrap";
import "../../../styles/App.css";

export default function HeroSection() {
  return (
    <Container fluid>
      <Row className="hero-container flex-container">
        <Col className="hero-content-section">
          <h1 className="hero-section-text-title rspnv">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="hero-section-text-description">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Button color="success">Mulai Sewa Mobil</Button>
        </Col>
        <Col className="hero-image-section">
          <Image
            src={CarImage}
            width={"100%"}
            className="image-car"
            alt="image_car"
          />
        </Col>
      </Row>
    </Container>
  );
}
