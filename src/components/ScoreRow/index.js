import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HandRow from "../HandRow";

const ScoreRow = ({ scoreBoard, totalHandPoints }) => {

    const topHands = scoreBoard[0];
    const bottomHands = scoreBoard[1];
    const topSubTotal = totalHandPoints(topHands)
    const topBonus = () => { return topSubTotal > 62 ? 35 : 0 };
    const topTotal = topSubTotal + topBonus();
    const bottomTotal = totalHandPoints(bottomHands);

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        {topHands.map((hand, i) => { return <HandRow key={`top ${i}`} hand={hand} /> })}
                        <Row >
                            <Col><p>Top Bonus</p></Col>
                            <Col><p>{topBonus()}</p></Col>
                        </Row>
                        <Row >
                            <Col><p>Top Total</p></Col>
                            <Col><p>{topTotal}</p></Col>
                        </Row>
                    </Col>
                    <Col>
                        {bottomHands.map((hand, i) => { return <HandRow key={`bottom ${i}`} hand={hand} /> })}
                        <Row >
                            <Col><p>Top Total</p></Col>
                            <Col><p>{bottomTotal}</p></Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col><p>Grand Total</p></Col>
                    <Col><p>{topTotal + bottomTotal}</p></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ScoreRow;