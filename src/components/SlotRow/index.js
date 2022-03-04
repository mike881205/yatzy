import React from "react";
import Row from 'react-bootstrap/Row';
import Slot from "../Slot";

const SlotRow = ({ slots, roundOver }) => {
    return (
        <Row>
            {slots.map((slot, i) => {return <Slot key={i} slot={slot} roundOver={roundOver} />})}
        </Row>
    );
};

export default SlotRow;