import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarImage from "../../../assets/img/img_car.png";

export default function HeroSection() {
  return (
    <Container fluid>
      <Row className="hero-container">
        <Col sm={12} md={6} className="hero-content-section">
          <h1 className="hero-section-text-title">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="hero-section-text-description">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Button color="success">Mulai Sewa Mobil</Button>
        </Col>
        <Col sm={12} md={6} className="hero-image-section">
          <img
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
