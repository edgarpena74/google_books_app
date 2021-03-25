import React from "react";
import "./Saved.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import API from "../utils/API";

// API.searchBooks();

// Pseudocode
// ********************************
//  Call in the posts that were saved using axios. Then map the
//  array/object on the screen similar to how searchResults.js did

const SavedBooks = () => {
  // const [savedBooks, setSavedBooks] = useState([
  //   {
  //     title: "",
  //     authors: "",
  //     description: "",
  //     image: "",
  //     link: "",
  //   },
  // ]);
  return (
    <div className="savedDiv">
      <Container id="savedContainer">
        <Row>
          <Col>
            <h3>Saved Books</h3>
          </Col>
        </Row>
        <Container className="savedBooks">
          <Row className="btnTitleRow">
            <Col md="7">
              <h4>The Chemical Philosophy of Robert Boyle</h4>
            </Col>
            <Col md="1"></Col>
            <Col md="3" className="btnsCol">
              <Button className="savedBtns">View</Button>
              <Button className="savedBtns">Delete</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Written by: Marina Paola, Banchetti-Robino</p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Image
                src="http://books.google.com/books/content?id=TSvsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                rounded
              />
            </Col>
            <Col md="8">
              <p>
                Robert Boyle (1627-1691) believed that a reductionist conception
                of the mechanical philosophy threatened the heuristic power and
                autonomy of chemistry as an experimental science. While some
                historical and philosophical scholars have examined his nuanced
                position, understanding the chemicalphilosophy he developed
                through his own experimental work is incredibly difficult even
                for experts in the field. In The Chemical Philosophy of Robert
                Boyle, Marina Paola Banchetti-Robino energetically explains
                Boyle's ideas in a whole new light and proposes that Boyle
                regarded chemical qualities asnon-reducible dispositional and
                relational properties that emerge from, and supervene upon, the
                mechanistic structure of chymical atoms. Banchetti-Robino
                demonstrates that these ideas are implicit in Boyle's writing,
                making his philosophical contributions crucial to the fields of
                both philosophy andchemistry.The arguments presented are further
                strengthened by a detailed mereological analysis of Boylean
                chymical atoms as chemically elementary entities, which
                establishes the theory of wholes and parts that is most
                consistent with an emergentist conception of chemical
                properties. More generally, this bookexamines the way in which
                Boyle sought to accommodate his complex chemical philosophy
                within the framework of the 17th century mechanistic theory of
                matter. Banchetti-Robino conceptualizes Boyle's experimental
                work as a scientific research programme, in the Lakatosian
                sense, to better explain thepositive and negative heuristic
                function of the mechanistic theory of matter within his chemical
                philosophy.The Chemical Philosophy of Robert Boyle actively
                engages with the contemporary and lively debates over the nature
                of Boyle's ideas about structural chemistry, fundamental
                mechanistic particles and properties, the explanatory power of
                subordinate causes, the complex relation between
                fundamentalparticles, natural kinds, and unified chemical
                wholes. The book is a rich historical account that begins with
                the dominant paradigms of 16th and 17th Century chemical
                philosophy and takes readers all the way through to the 21st
                Century.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default SavedBooks;
