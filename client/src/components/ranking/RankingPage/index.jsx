import React from 'react';
import { Container, ListGroup } from "react-bootstrap";
import RankingEntry from '../RankingEntry';

function RankingPage() {
    return (
        <Container>
            <ListGroup striped bordered hover>
                <RankingEntry position={1} user={{ name: "Nirro", awards: 0, score: 19}} shift={"UP"} />
                <RankingEntry position={2} user={{ name: "Cris", awards: 0, score: 12}} shift={"UP"} />
                <RankingEntry position={3} user={{ name: "Gojo", awards: 0, score: 9 }} shift={"DOWN"} />
                <RankingEntry position={3} user={{ name: "Aitor", awards: 0, score: 9}} shift={"UP"} />
                <RankingEntry position={4} user={{ name: "Sara", awards: 0, score: 8}} shift={"UP"} />
            </ListGroup>
        </Container>
    );
}

export default RankingPage;