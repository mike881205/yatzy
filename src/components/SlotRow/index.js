import React from "react";
import Row from 'react-bootstrap/Row';
import Slot from "../Slot";

const SlotRow = ({ slots }) => {
    return (
        <Row>
            {slots.map((slot, i) => {return <Slot key={i} slot={slot} />})}
        </Row>
    );
};

export default SlotRow;