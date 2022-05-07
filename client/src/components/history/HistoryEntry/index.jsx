import "./index.css";

import React from "react";
import { Badge, Col, Row } from "react-bootstrap";

import ISODate from "../../common/ISODate";
import UserAvatar from "../../common/UserAvatar";

function PartyDescription({ party }) {
  return (
    <p>
      <span class="fw-bold">{party.type.name}</span>
      <span> en </span>
      <span class="fw-bold">{party.announcement.location.name}</span>
    </p>
  );
}

function EntryDate({ date }) {
  return (
    <Badge bg="light" text="dark">
      <Row className="d-md-none">
        <Col>
          <span className="text-capitalize">
            <ISODate value={date} weekday="long" />{" "}
          </span>
          <span className="text-danger">
            <ISODate value={date} day="numeric" />{" "}
          </span>
          <span className="text-capitalize">
            <ISODate value={date} month="long" />
          </span>
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <Col className="text-capitalize">
          <ISODate value={date} weekday="long" />
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <Col className="text-danger">
          <h3>
            <ISODate value={date} day="numeric" />
          </h3>
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <Col className="text-capitalize">
          <h5>
            <ISODate value={date} month="long" />
          </h5>
        </Col>
      </Row>
    </Badge>
  );
}

function EntryPoints({ value, className }) {
  return (
    <Badge className={className} pill bg="success">
      +{value}
    </Badge>
  );
}

function HistoryEntry({ confirmation }) {
  const { party, attenders, photo } = confirmation;

  return (
    <>
      <Row>
        <Col className="align-self-center" md={1}>
          <EntryDate date={party.announcement.date} />
          <EntryPoints className="d-md-none" value={party.type.points} />
        </Col>
        <Col>
          <Row>
            <Col>
              <PartyDescription party={party} />
            </Col>
          </Row>
          <Row className="d-none d-md-block">
            <Col>
              {attenders.map((user) => (
                <UserAvatar user={user} tooltip />
              ))}
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-md-block align-self-center" md={1}>
          <h4>
            <EntryPoints value={party.type.points} />
          </h4>
        </Col>
      </Row>
      <Row className="d-md-none">
        <Col>
          {attenders.map((user) => (
            <UserAvatar user={user} tooltip />
          ))}
        </Col>
      </Row>
    </>
  );
}

export default HistoryEntry;
