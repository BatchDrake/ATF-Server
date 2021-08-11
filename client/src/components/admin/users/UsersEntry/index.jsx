import "./index.css";

import { Accordion, Col, Image, Row } from "react-bootstrap";

import Victories from "../../../common/Victories";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default UsersEntry;
