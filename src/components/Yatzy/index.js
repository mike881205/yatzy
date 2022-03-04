import React, { useState } from "react";
import Constants from "../../constants/constants";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SlotRow from "../SlotRow";
import ScoreRow from "../ScoreRow";

const Yatzy = () => {

    const { Dice, Slots, topHands, bottomHands } = Constants;

    const [scoreBoard, setBoard] = useState([topHands(), bottomHands()]);
    const [slots, setSlots] = useState(Slots());

    const totalHandPoints = board => {
        let total = 0;
        board.forEach(hand => total + hand.points);
        return total;
    };

    const shuffleSlots = () => {
        const getRandomIndex = () => {
            const min = Math.ceil(0);
            const max = Math.floor(5);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const newSlots = slots.map(slot => {
            const index = getRandomIndex();
            const randDice = Dice[index];
            if (!slot.held) {
                slot.value = randDice.value;
                slot.image = randDice.image;
            };
            return slot;
        });

        setSlots(newSlots);
    };

    return (
        <Container>
            <SlotRow slots={slots} />

            <Row>
                <Col>
                    <Button variant="primary" onClick={shuffleSlots}>Shuffle</Button>{' '}
                </Col>
            </Row>

            <ScoreRow
                scoreBoard={scoreBoard}
                totalHandPoints={totalHandPoints}
            />
        </Container>
    );
};

export default Yatzy;