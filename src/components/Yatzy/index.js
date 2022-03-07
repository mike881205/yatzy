import React, { useState } from "react";
import Constants from "../../constants/constants";
import Container from 'react-bootstrap/Container';
import SlotRow from "../SlotRow";
import BoardRow from "../BoardRow";
import ButtonRow from "../ButtonRow";
import HandModal from "../HandModal";

const Yatzy = () => {

    const { Dice, Slots, topHands, bottomHands } = Constants;

    const [scoreBoard, setBoard] = useState([topHands(), bottomHands()]);
    const [slots, setSlots] = useState(Slots());
    const [gameOver, setGameOver] = useState(true);
    const [roundOver, setRoundOver] = useState(true);
    const [roll, setRoll] = useState(0);
    const [selected, setSelected] = useState(false);
    const [showModal, setShow] = useState(false);
    const [modalContent, setContent] = useState({name: '', points: ''});

    const handleClose = () => {
        setContent({name: '', points: ''});
        setShow(false);
    };
    const handleShow = hand => {
        setContent(hand);
        setShow(true);
    };

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
        scoreBoard.forEach(board => {
            board.forEach(hand => {
                hand.valid = false;
                hand.removeHand = false;
                if (!hand.used || !hand.removed) hand.points = 0;
            });
        });
        setBoard([...scoreBoard])
        setRoll(0);
        setSlots(Slots());
        setRoundOver(false);
    };

    const endRound = () => {
        setRoundOver(true);
        checkHands();
    };

    const holdSlot = slot => {
        if (slot.held) { slot.held = false }
        else { slot.held = true };
        setSlots([...slots], { slot });
    };

    const checkHands = () => {

        const topHands = [...scoreBoard[0]];
        const bottomHands = [...scoreBoard[1]];

        const finalVals = slots.map(slot => slot.value).sort((a, b) => a - b);
        // const finalVals = [2,2,3,3,3]

        const valTotal = () => {
            let sum = 0;
            finalVals.forEach(val => sum += val);
            return sum;
        };

        const filterVals = () => {
            var seen = {};
            return finalVals.filter((val, i) => {
                return seen.hasOwnProperty(val) ? false : (seen[val] = true);
            });
        };

        const uniqueVals = filterVals();

        const valCount = () => {
            const counts = {};
            finalVals.forEach(val => { counts[val] = (counts[val] || 0) + 1; });
            return counts;
        };

        const countObj = valCount();

        const checkStraights = () => {

            let consecutive = 1;

            for (let i = 1; i < uniqueVals.length; i++) {
                if (uniqueVals[i] === uniqueVals[i - 1] + 1) { consecutive++ }
                else { consecutive = 1 };
                switch (consecutive) {
                    case 4:
                        if (!bottomHands[3].used && !bottomHands[3].removed) {
                            console.log("small")
                            bottomHands[3].valid = true;
                            bottomHands[3].points = bottomHands[3].value;
                        };
                        break;
                    case 5:
                        if (!bottomHands[3].used && !bottomHands[3].removed) {
                            console.log("small")
                            bottomHands[3].valid = true;
                            bottomHands[3].points = bottomHands[3].value;
                        };
                        if (!bottomHands[4].used && !bottomHands[4].removed) {
                            console.log("large")
                            bottomHands[4].valid = true;
                            bottomHands[4].points = bottomHands[4].value;
                        };
                        break;
                    default:
                        break;
                };
            };
        };

        const checkDuplicates = () => {
            let FHdouble = false;
            let FHtriple = false;
            for (var key of Object.keys(countObj)) {
                if (countObj[key] > 1) {
                    switch (countObj[key]) {
                        case 2:
                            console.log(`${key}'s: ${countObj[key]}`)
                            if (!bottomHands[2].used && !bottomHands[2].removed) FHdouble = true;
                            break;
                        case 3:
                            if (!bottomHands[2].used && !bottomHands[2].removed) FHtriple = true;
                            if (!bottomHands[0].used && !bottomHands[0].removed) {
                                console.log(`${key}'s: ${countObj[key]}`)
                                bottomHands[0].valid = true;
                                bottomHands[0].points = valTotal();
                            };
                            break;
                        case 4:
                            if (!bottomHands[0].used && !bottomHands[0].removed) {
                                console.log(`${key}'s: ${countObj[key]}`)
                                bottomHands[0].valid = true;
                                bottomHands[0].points = valTotal();
                            };
                            if (!bottomHands[1].used && !bottomHands[1].removed) {
                                console.log(`${key}'s: ${countObj[key]}`)
                                bottomHands[1].valid = true;
                                bottomHands[1].points = valTotal();
                            };
                            break;
                        case 5:
                            if (!bottomHands[0].used && !bottomHands[0].removed) {
                                console.log(`${key}'s: ${countObj[key]}`)
                                bottomHands[0].valid = true;
                                bottomHands[0].points = valTotal();
                            };
                            if (!bottomHands[1].used && !bottomHands[1].removed) {
                                console.log(`${key}'s: ${countObj[key]}`)
                                bottomHands[1].valid = true;
                                bottomHands[1].points = valTotal();
                            };

                            if (!bottomHands[6].used && !bottomHands[6].removed) {
                                bottomHands[6].valid = true;
                                bottomHands[6].points = bottomHands[6].value;
                            }
                            else if (!bottomHands[6].removed && bottomHands[6].used) {
                                bottomHands[7].valid = true;
                                bottomHands[7].points = bottomHands[7].value;
                            };
                            break;
                        default:
                            break;
                    }
                }
            };

            if (FHdouble && FHtriple) {
                bottomHands[2].valid = true;
                bottomHands[2].points = bottomHands[2].value;
            };
        };

        // Check Chance
        if (!bottomHands[5].used && !bottomHands[6].removed) {
            bottomHands[5].valid = true;
            bottomHands[5].points = valTotal();
        };

        // Check First Scoreboard
        topHands.forEach(hand => {
            for (var key of Object.keys(countObj)) {
                if (hand.value === parseInt(key) && !hand.used && !hand.removed) {
                    hand.valid = true;
                    hand.points = hand.value * countObj[key];
                };
            };
        });

        // Check Second Scoreboard
        checkDuplicates();
        checkStraights();

        setBoard([[...topHands], [...bottomHands]]);
    };

    const shuffleSlots = () => {

        const getRandomIndex = () => {
            const min = Math.ceil(0);
            const max = Math.floor(5);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        slots.forEach(slot => {
            const index = getRandomIndex();
            const randDice = Dice[index];
            if (!slot.held) {
                slot.value = randDice.value;
                slot.image = randDice.image;
            };
            setSlots([...slots], { slot })
        });

        setRoll(prevRoll => prevRoll + 1);
        if (roll + 1 === 3) endRound();
    };

    return (
        <Container>
            <SlotRow
                holdSlot={holdSlot}
                roll={roll}
                roundOver={roundOver}
                slots={slots}
            />

            <ButtonRow
                roll={roll}
                roundOver={roundOver}
                gameOver={gameOver}
                selected={selected}
                shuffleSlots={shuffleSlots}
                startGame={startGame}
                nextRound={nextRound}
                endRound={endRound}
            />

            <BoardRow
                handleShow={handleShow}
                scoreBoard={scoreBoard}
                totalHandPoints={totalHandPoints}
            />

            <HandModal
                show={showModal}
                modalContent={modalContent}
                handleClose={handleClose}
            />
        </Container>
    );
};

export default Yatzy;