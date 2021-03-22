import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
// import API from "../utils/API";
// import axios from "axios";

//find a way to save book to array;
//then map the array using a component for the saved books

// const testBooks = () => {
//   fetch(url, {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       console.log("did this work", {
//         title: data.items[0].volumeInfo.title,
//         authors: data.items[0].volumeInfo.authors,
//         description: data.items[0].volumeInfo.description,
//         image: data.items[0].volumeInfo.imageLinks.thumbnail,
//         link: data.items[0].volumeInfo.infoLink,
//       });
//     });
// };
// testBooks();

API.testRoutes();

const SavedBooks = () => {
  // const [bookInfo, setBookInfo] = useState([
  //   {
  //     title: "",
  //     authors: "",
  //     description: "",
  //     image: "",
  //     link: "",
  //   },
  // ]);
  return (
    <Container fluid="md" id="SavedBooks">
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
  );
};

export default SavedBooks;
