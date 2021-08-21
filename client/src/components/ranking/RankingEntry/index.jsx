import "./index.css";

import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Badge, Col, Row } from "react-bootstrap";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Victories from "../../common/Victories";
import UserAvatar from "../../common/UserAvatar";

function Shift({ shift }) {
  switch (shift) {
    case "RISES":
      return <Icon className="ranking-shift__arrow--rises" icon={faArrowUp} />;
    case "STAYS":
      return null;
    case "FALLS":
      return (
        <Icon className="ranking-shift__arrow--falls" icon={faArrowDown} />
      );
    default:
      throw TypeError("Unexpected variation value " + shift);
  }
}

function RankingEntry({ rank }) {
  const { position, holder, variation } = rank;

  return (
    <Row className="ranking__entry">
      <Col className="ranking-position align-self-center" xs={1}>
        <Badge pill bg="secondary">
          {position}
        </Badge>
      </Col>
      <Col className="d-none d-md-block align-self-center">
        <UserAvatar user={holder} />
        <span className="ranking-user__name">{holder.name}</span>
      </Col>
      <Col className="d-md-none align-self-center">
        <UserAvatar user={holder} />
      </Col>
      <Col className="d-md-none align-self-center">
        <span>{holder.name}</span>
      </Col>
      <Col className="d-none d-sm-block align-self-center" sm={1}>
        <Victories amount={holder.victories} />
      </Col>
      <Col className="ranking-score align-self-center" xs={1}>
        {holder.score}
      </Col>
      <Col className="ranking-shift align-self-center" xs={2} md={1}>
        <Shift shift={variation} />
      </Col>
    </Row>
  );
}

export default RankingEntry;
