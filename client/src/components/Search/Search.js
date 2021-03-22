import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchResults from "./SearchResults";
// import API from "../utils/API";

const Search = () => {
  //   const apiKey = process.env.API_KEY;
  //   const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}:keyes&${apiKey}`;

  //   const [bookInfo, setBookInfo] = useState([
  //     {
  //       title: "",
  //       authors: "",
  //       description: "",
  //       image: "",
  //       link: "",
  //     },
  //   ]);
  const [bookSearch, setBookSearch] = useState({
    userInput: "",
  });

  const onChange = (e) => {
    setBookSearch({ ...bookSearch, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(bookSearch, " this is from handle submit");
      //   API.getBooks(bookSearch).then((res) => {
      //     console.log(res);
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  //   const testBooks = () => {
  //     fetch(url, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);

  //         console.log("did this work", {
  //           title: data.items[0].volumeInfo.title,
  //           authors: data.items[0].volumeInfo.authors,
  //           description: data.items[0].volumeInfo.description,
  //           image: data.items[0].volumeInfo.imageLinks.thumbnail,
  //           link: data.items[0].volumeInfo.infoLink,
  //         });
  //       });
  //   };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Google Books Search</Form.Label>
          <Form.Control
            onChange={onChange}
            type="text"
            placeholder="Search For A Book"
            name="userInput"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
