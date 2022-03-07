import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HandRow = ({ hand, board, index, handleShow }) => {

    const { points, used, removed, valid, removeHand } = hand;

    const handleClick = e => {
        const btnClass = e.currentTarget.className;
        if (!btnClass.includes('disabled')) handleShow({ name: hand.hand, points: points, valid: valid, remove: removeHand, used: used, removed: removed, board: board, index: index })
    }

    return (
        <Row
            className={
                valid || removeHand ?
                    valid ? 'btn-info' : 'btn-danger'
                    :
                    used || removed ?
                        used ? 'btn-success disabled' : 'btn-secondary disabled'
                        :
                        'disabled'
            }
            onClick={e => handleClick(e)}
        >
            <Col><p>{hand.hand === 'Yatzy Bonus' ? valid ? `${hand.hand}` : `${hand.hand} x${hand.count}` : hand.hand}</p></Col>
            <Col><p>{points}</p></Col>
        </Row>
    );
};

export default HandRow;