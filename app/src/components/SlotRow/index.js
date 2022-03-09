import React from "react";
import Row from 'react-bootstrap/Row';
import Slot from "../Slot";

const SlotRow = ({ slots, roll, roundOver, holdSlot }) => {
    return (
        <Row style={{margin: '1%'}}>
            {slots.map((slot, i) => { return <Slot key={i} slot={slot} roundOver={roundOver} roll={roll} holdSlot={holdSlot} />})}
        </Row>
    );
};

export default SlotRow;