import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HandRow = ({ hand }) => {

    return (
        <Row >
            <Col><p>{hand.hand}</p></Col>
            <Col><p>{hand.points}</p></Col>
        </Row>
    );
};

export default HandRow;