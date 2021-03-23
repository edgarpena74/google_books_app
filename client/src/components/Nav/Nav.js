import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

const Navigation = () => {
  return (
    <div>
      <Navbar id="navBar">
        <Nav.Brand>Google Books App</Nav.Brand>
        <Nav.Brand className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Saved</Nav.Link>
          </Nav.Item>
        </Nav.Brand>
      </Navbar>
    </div>
  );
};

export default Navigation;
