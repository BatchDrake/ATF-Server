import React from "react";
import { Container, ListGroup } from "react-bootstrap";

import UseAsyncSwitch from "../../common/UseAsyncSwitch";
import useConfirmations from "../../../hooks/history/useConfirmations";
import HistoryEntry from "../HistoryEntry";

function HistoryContent({ value }) {
  const entries = value.data.map((confirmation) => {
    return (
      <ListGroup.Item>
        <HistoryEntry confirmation={confirmation} />
      </ListGroup.Item>
    );
  });

  return <ListGroup>{entries}</ListGroup>;
}

function HistoryPage() {
  return (
    <Container>
      <UseAsyncSwitch hook={useConfirmations} Content={HistoryContent} />
    </Container>
  );
}

export default HistoryPage;
