import React from "react";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ReactBootstrap = () => {
  return (
    <div className="item-center flex justify-center">
      <div className="flex-col items-center justify-center border-2 border-cyan-400 text-center">
        <Button>hello</Button>

        <Row className="mx-0">
          <Button as={Col} variant="primary">
            Button #1
          </Button>
          <Button as={Col} variant="secondary" className="mx-2">
            Button #2
          </Button>
          <Button as={Col} variant="success">
            Button #3
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default ReactBootstrap;
