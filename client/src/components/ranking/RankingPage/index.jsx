import React from "react";
import { Container, ListGroup } from "react-bootstrap";

import useRanking from "../../../hooks/ranking/useRanking";
import UseAsyncSwitch from "../../common/UseAsyncSwitch";

import RankingEntry from "../RankingEntry";

function RankingContent({ value }) {
  const entries = value.data.map((rank) => {
    return <RankingEntry rank={rank} />;
  });

  return <ListGroup>{entries}</ListGroup>;
}

function RankingPage() {
  return (
    <Container>
      <UseAsyncSwitch hook={useRanking} Content={RankingContent} />
    </Container>
  );
}

export default RankingPage;
