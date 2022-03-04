import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Slot = ({ slot, roundOver }) => {
    const { value, image, held } = slot;
    return (
        <Col>
            <Row>
                <Col>
                    <h1>{value}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant={held ? "danger" : "warning"} disabled={roundOver}>{held ? "Held" : "Hold"}</Button>{' '}
                </Col>
            </Row>
        </Col>
    );
};

export default Slot;