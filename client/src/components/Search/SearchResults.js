import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import API from "../../utils/API";
import "./Search.css";

const SearchResults = ({ result }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello handleSubmit");
    try {
      API.postBooks({ result }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container fluid="md" className="searchResults">
        <Row className="searchResultsRow">
          <Col md="3">{result.volumeInfo.title}</Col>
          <Col md="5">{result.volumeInfo.authors?.join(", ")}</Col>
          <Col md="2" className="theButtons">
            <Button type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </Col>
          <Col md="2" className="theButtons">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="bookInfo"
              aria-expanded={open}
            >
              Details
            </Button>
          </Col>
        </Row>
        <Row>
          <Collapse in={open}>
            <Container>
              <Row>
                <Col md="4">
                  <Image
                    src={result.volumeInfo.imageLinks?.thumbnail}
                    rounded
                  />
                </Col>
                <Col md="8">{result.volumeInfo.description}</Col>
              </Row>
            </Container>
          </Collapse>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;
