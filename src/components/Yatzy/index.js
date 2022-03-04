import React, { useState } from "react";
import Constants from "../../constants/constants";
import Container from 'react-bootstrap/Container';
import SlotRow from "../SlotRow";
import ScoreRow from "../ScoreRow";
import ButtonRow from "../ButtonRow";

const Yatzy = () => {

    const { Dice, Slots, topHands, bottomHands } = Constants;

    const [scoreBoard, setBoard] = useState([topHands(), bottomHands()]);
    const [slots, setSlots] = useState(Slots());
    const [gameOver, setGameOver] = useState(true);
    const [roundOver, setRoundOver] = useState(true);
    const [roll, setRoll] = useState(0);

    const totalHandPoints = board => {
        let total = 0;
        board.forEach(hand => total + hand.points);
        return total;
    };

    const startGame = () => {
        setGameOver(false);
        setRoundOver(false);
    };

    const nextRound = () => {
        setRoll(0);
        setRoundOver(false);
        setSlots(Slots());
    };

    const endRound = () => {
        setRoundOver(true);
    };

    const updateRoll = () => {
        setRoll(prevRoll => prevRoll + 1);
        if (roll + 1 === 3) setRoundOver(true);
    };

    const shuffleSlots = () => {
        const getRandomIndex = () => {
            const min = Math.ceil(0);
            const max = Math.floor(5);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

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
        updateRoll();
    };

    return (
        <Container>
            <SlotRow
                roundOver={roundOver}
                slots={slots}
            />

            <ButtonRow
                roll={roll}
                roundOver={roundOver}
                gameOver={gameOver}
                shuffleSlots={shuffleSlots}
                startGame={startGame}
                nextRound={nextRound}
                endRound={endRound}
            />

            <ScoreRow
                scoreBoard={scoreBoard}
                totalHandPoints={totalHandPoints}
            />
        </Container>
    );
};

export default Yatzy;