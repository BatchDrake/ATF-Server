import "./index.css";

import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Col, Image, Row } from "react-bootstrap";
import {
  faArrowDown,
  faArrowUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Victories({ amount }) {
  return Array(amount).fill(
    <Icon className="ranking-awards__star" icon={faStar} />
  );
}

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
      <Col className="ranking-position">
        <span className="ranking-position__text">{position}</span>
      </Col>
      <Col className="ranking-user">
        <Image className="avatar" src={holder.avatar} roundedCircle />
        <span>{holder.name}</span>
      </Col>
      <Col className="ranking-separator" xs={1} md={5}></Col>
      <Col className="ranking-shift">
        <Shift shift={variation} />
      </Col>
      <Col className="ranking-awards">
        <Victories amount={holder.victories} />
      </Col>
      <Col className="ranking-score">{holder.score}</Col>
      <hr />
    </Row>
  );
}

export default RankingEntry;
