import React from "react";
import "./Saved.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import API from "../utils/API";

//find a way to save book to array;
//then map the array using a component for the saved books

// API.searchBooks();

const SavedBooks = () => {
  return (
    <div>
      <Container id="booksContainer">
        <Row>
          <Col>Saved Books</Col>
        </Row>
        <Row>
          <Col md="3">
            <p>title of books</p>
          </Col>
          <Col md="9">view and delete buttons</Col>
        </Row>
        <Row>
          <Col>
            <p>Written by:"the title of the author from map"</p>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <p>This will be the image with src form map</p>
          </Col>
          <Col md="8">
            <p>Book description</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SavedBooks;
