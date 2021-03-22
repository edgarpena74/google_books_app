import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
const SearchResults = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container>
        <Row></Row>
        <Row>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="bookInfo"
            aria-expanded={open}
          >
            Click
          </Button>
          <Collapse in={open}>
            <div id="bookInfo">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;
