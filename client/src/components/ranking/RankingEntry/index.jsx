import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function RankingEntry({ position, user, shift }) {
    return (
        <Row>
            <Col>{position}</Col>
            <Col><Image src={user.avatar} roundedCircle /></Col>
            <Col>{user.name}</Col>
            <Col>{shift}</Col>
            <Col>{user.awards}</Col>
            <Col>{user.score}</Col>
        </Row>
    );
}

export default RankingEntry;