import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HandRow = ({ hand, handleShow }) => {

    const {points, used, removed, valid, removeHand} = hand;

    return (
        <Row 
            className={
                used || removed ?
                used ? 'btn-success' : 'btn-secondary'
                :
                valid || removeHand ?
                valid ? 'btn-info' : 'btn-danger'
                :
                ''
            }
            onClick={() => handleShow({name: hand.hand, points: points})}
        >
            <Col><p>{hand.hand}</p></Col>
            <Col><p>{points}</p></Col>
        </Row>
    );
};

export default HandRow;