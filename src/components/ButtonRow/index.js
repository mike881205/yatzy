import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ButtonRow = ({ shuffleSlots, roll, roundOver, gameOver, selectedHand, validHand, startGame, nextRound, endRound, resetGame }) => {

    const {used, removed} = selectedHand;

    return (
        <Row style={{margin: '1%'}}>
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
                            !removed && !used ?
                                <Row>
                                    <Col>
                                        <h3>{!validHand ? 'Select Hand to Remove' : 'Select a Hand'}</h3>
                                    </Col>
                                </Row>
                                :
                                <Row>
                                    <Col>
                                        <Button variant="success" onClick={!gameOver ? () => nextRound() : () => resetGame()}>{!gameOver ? 'Next Round': 'New Game'}</Button>{' '}
                                    </Col>
                                </Row>
                            :
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={() => shuffleSlots()}>Shuffle</Button>{' '}
                                </Col>
                                <Col>
                                    <Button variant="danger" disabled={roll === 0} onClick={() => endRound()}>End Round</Button>{' '}
                                </Col>
                            </Row>
                }
            </Col>
        </Row>
    );
};

export default ButtonRow;