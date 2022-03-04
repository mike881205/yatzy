import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ButtonRow = ({ shuffleSlots, roll, roundOver, gameOver, startGame, nextRound, endRound }) => {

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h3>Roll: {roll}</h3>
                    </Col>
                </Row>
                {
                    gameOver && roundOver && roll === 0 ?
                        <Row>
                            <Col>
                                <Button variant="success" onClick={() => startGame()}>Start Game</Button>{' '}
                            </Col>
                        </Row>
                        :
                        roundOver ?
                            <Row>
                                <Col>
                                    <Button variant="success" onClick={() => nextRound()}>Next Round</Button>{' '}
                                </Col>
                            </Row>
                            :
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={() => shuffleSlots()}>Shuffle</Button>{' '}
                                </Col>
                                <Col>
                                    <Button variant="danger" onClick={() => endRound()}>End Round</Button>{' '}
                                </Col>
                            </Row>
                }
            </Col>
        </Row>
    );
};

export default ButtonRow;