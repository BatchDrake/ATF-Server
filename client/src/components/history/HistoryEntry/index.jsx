import React from "react";
import { Col, Row } from "react-bootstrap";

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

function HistoryEntry({ confirmation }) {
  const { party, attenders, photo } = confirmation;

  return (
    <>
      <Row>
        <Col className="align-self-center" xs={2}>
          {party.announcement.date}
        </Col>
        <Col>
          <Row>
            <Col>
              <PartyDescription party={party} />
            </Col>
          </Row>
          <Row>
            <Col>
              {attenders.map((user) => (
                <UserAvatar user={user} tooltip />
              ))}
            </Col>
          </Row>
        </Col>
        <Col className="align-self-center" xs={1}>
          <span> +{party.type.points}</span>
        </Col>
      </Row>
    </>
  );
}

export default HistoryEntry;
