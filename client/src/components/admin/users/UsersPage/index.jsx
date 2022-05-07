import "./index.css";

import React from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import useUsers from "../../../../hooks/users/useUsers";
import UseAsyncSwitch from "../../../common/UseAsyncSwitch";
import UsersEntry from "../UsersEntry";

import { Col, Row } from "react-bootstrap";

function UsersContent({ value }) {
  const entries = value.data.map((user, i) => {
    return <UsersEntry user={user} index={i} />;
  });

  return (
    <ListGroup>
      <ListGroup.Item className="user-list__header" variant="dark">
        <Row>
          <Col>Usuario</Col>
          <Col className="d-none d-xl-block">Correo</Col>
          <Col className="d-none d-md-block">Ciudad</Col>
          <Col className="d-none d-sm-block" xs={1}>
            Puntis
          </Col>
          <Col className="d-none d-xl-block" xs={1}>
            Victorias
          </Col>
          <Col xs={1}></Col>
        </Row>
      </ListGroup.Item>
      <Accordion flush>{entries}</Accordion>
    </ListGroup>
  );
}

function UsersPage() {
  return (
    <Container>
      <UseAsyncSwitch hook={useUsers} Content={UsersContent} />
    </Container>
  );
}

export default UsersPage;
