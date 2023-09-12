import { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { API } from "../../../common/API";

export default function SearchSection() {
  const [nameCar, setNameCar] = useState("");
  const [category, setCategory] = useState("");
  const [isRented, setIsRented] = useState(false);
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmited] = useState(false);

  const fetchData = () => {
    const params = `name=${nameCar}&category=${category}&isRented=${isRented}&${mappingPrice(
      price
    )}`;

    API.get(`admin/v2/car?${params}&page=1&pageSize=10`)
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => {
        console.log("err:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchDataDetail = (id) => {
    API.get(`Admin/Car/${id}`)
      .then((res) => {})
      .catch((err) => {});
  };

  const mappingPrice = (price) => {
    switch (price) {
      case "low":
        return "minPrice=0&maxPrice=400000";
      case "medium":
        return "minPrice=400000&maxPrice=600000";
      case "high":
        return "minPrice=600000&maxPrice=1000000";
      default:
        return "";
    }
  };

  const formatToIDR = (idr) => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${"Rp "}${parsed}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    setIsLoading(true);

    fetchData();
  };

  return (
    <Container fluid className="search-card-section">
      <section className="search-card">
        <Row className="search-card-form">
          <Col md={10}>
            <Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Label for="nama" className="input-form">
                    Nama Mobil
                  </Form.Label>
                  <Form.Control
                    disabled={isSubmitted}
                    id="nama"
                    className="input-form"
                    type="text"
                    placeholder="Ketik nama/tipe mobil"
                    onChange={(e) => setNameCar(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label for="kapasitas" className="input-form">
                    Kategori
                  </Form.Label>
                  <Form.Select
                    disabled={isSubmitted}
                    id="kapasitas"
                    name="select"
                    type="select"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option hidden>Masukkan Kapasitas Mobil</option>
                    <option className="opt" value="small">
                      2-4 orang
                    </option>
                    <option className="opt" value="medium">
                      4-6 orang
                    </option>
                    <option className="opt" value="large">
                      6-8 orang
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label for="harga" className="input-form">
                    Harga
                  </Form.Label>
                  <Form.Select
                    disabled={isSubmitted}
                    id="harga"
                    name="select"
                    type="select"
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option hidden>Masukkan harga sewa per hari</option>
                    <option className="opt" value="low">
                      {`< Rp 400.000`}
                    </option>
                    <option className="opt" value="medium">
                      Rp.400.000 - Rp.600.000
                    </option>
                    <option className="opt" value="high">
                      {`> Rp 600.000`}
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label for="status" className="input-form">
                    Status
                  </Form.Label>
                  <Form.Select
                    disabled={isSubmitted}
                    id="status"
                    name="select"
                    type="select"
                    onChange={(e) => setIsRented(e.target.value)}
                  >
                    <option className="opt" value={true}>
                      Disewa
                    </option>
                    <option className="opt" value={false}>
                      Free
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            {isSubmitted ? (
              <Button
                type="button"
                color="info"
                className="button-submit-search"
                outline
                onClick={() => {
                  setIsSubmited(false);
                  setData([]);
                }}
              >
                Edit
              </Button>
            ) : (
              <Button
                type="button"
                color="success"
                className="button-submit-search"
                onClick={handleSubmit}
              >
                Cari Mobil
              </Button>
            )}
          </Col>
        </Row>
      </section>

      <section className="display-car-section">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Row>
            {data.map((car) => {
              return (
                <Fragment key={car.id}>
                  <Col md={4}>
                    <Card
                      style={{
                        marginTop: "30px",
                      }}
                    >
                      <img alt={car.name} src={car.image} />
                      <Card.Body>
                        <Card.Title tag="h5">{car.name}</Card.Title>
                        <Card.Text>{formatToIDR(car.price)} / hari</Card.Text>
                        <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Card.Text>
                        <Button
                          color="success"
                          style={{ width: "100%" }}
                          onClick={() => console.log(car.id)}
                        >
                          Pilih Mobil
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Fragment>
              );
            })}
          </Row>
        )}
      </section>
    </Container>
  );
}
