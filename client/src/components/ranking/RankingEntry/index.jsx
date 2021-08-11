import "./index.css";

import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Col, Image, Row } from "react-bootstrap";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Victories from "../../common/Victories";

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
      <Col>
        <Victories amount={holder.victories} />
      </Col>
      <Col className="ranking-score">{holder.score}</Col>
    </Row>
  );
}

export default RankingEntry;
