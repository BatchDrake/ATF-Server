import "./index.css";

import React from "react";
import { Accordion, Col, Image, Row } from "react-bootstrap";

import Victories from "../../../common/Victories";
import UserForm from "../UserForm";

function UsersEntry({ user, index }) {
  return (
    <Accordion.Item className="user-list__entry" eventKey={index}>
      <Accordion.Header>
        <Row className="user-list__row">
          <Col>
            <Image className="avatar" src={user.avatar} roundedCircle />
            <span>{user.name}</span>
          </Col>
          <Col className="d-none d-xl-block">{user.email}</Col>
          <Col className="d-none d-md-block">{user.location.name}</Col>
          <Col className="d-none d-sm-block" xs={1}>
            {user.score}
          </Col>
          <Col className="d-none d-xl-block" xs={1}>
            <Victories amount={user.victories} />
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Accordion.Header>
      <Accordion.Body>
        <UserForm value={user} />
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default UsersEntry;
