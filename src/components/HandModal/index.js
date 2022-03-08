import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HandModal = ({ show, handleClose, selectedHand, finalModalObj, selectHand, gameOver, resetGame }) => {

    const { name, points, remove } = selectedHand;
    const { topScore, bottomScore } = finalModalObj;

    const topBonus = () => { return topScore < 63 ? 0 : 35 };
    const grandTotal = topScore + bottomScore + topBonus();

    if (!gameOver) {
        return (
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Body> {remove ? `Remove "${name}"?` : `Select "${name}" for ${points} point(s)?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Nope!</Button>
                    <Button variant="primary" onClick={() => selectHand(selectedHand)}>Yes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    else {
        return (
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header >
                    <Container>
                        <Row align='center'>
                            <Col>
                                <h1>Game Over!</h1>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row >
                            <Col>Top Score</Col>
                            <Col align='right'>{topScore}</Col>
                        </Row>
                        <Row >
                            <Col >{'Top Bonus (If Top Score >= 63, +35)'}</Col>
                            <Col sm="2" align='right'>{topBonus()}</Col>
                        </Row>
                        <Row >
                            <Col>Bottom Score</Col>
                            <Col align='right'>{bottomScore}</Col>
                        </Row>
                        <hr></hr>
                        <Row >
                            <Col>Grand Total</Col>
                            <Col align='right'>{grandTotal}</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer >
                    <Container>
                        <Row align='center'>
                            <Col>
                                <Button variant="success" onClick={() => resetGame()}>New Game</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default HandModal;
