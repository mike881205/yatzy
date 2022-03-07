import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HandRow from "../HandRow";

const BoardRow = ({ scoreBoard, topScore, bottomScore, handleShow }) => {

    const topBonus = () => { return topScore > 62 ? 35 : 0 };
    const topTotal = topScore + topBonus();

    return (
        <Row style={{margin: '1%'}}>
            <Col>
                <Row>
                    <Col>
                        {scoreBoard[0].map((hand, i) => { return <HandRow key={`top ${i}`} handleShow={handleShow} hand={hand} board={0} index={i} /> })}
                        <Row className="btn-secondary" style={{margin: '1%', border: 'solid black', color: 'black'}}>
                            <Col><p>Top Bonus</p></Col>
                            <Col><p>{topBonus()}</p></Col>
                        </Row>
                        <Row className="btn-secondary" style={{margin: '1%', border: 'solid black', color: 'black'}}>
                            <Col><p>Top Total</p></Col>
                            <Col><p>{topTotal}</p></Col>
                        </Row>
                    </Col>
                    <Col>
                        {scoreBoard[1].map((hand, i) => { return <HandRow key={`bottom ${i}`} handleShow={handleShow} hand={hand} board={1} index={i} /> })}
                        <Row className="btn-secondary" style={{margin: '1%', border: 'solid black', color: 'black'}}>
                            <Col><p>Top Total</p></Col>
                            <Col><p>{bottomScore}</p></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="btn-secondary" style={{margin: '1%', border: 'solid black', color: 'black'}} >
                    <Col><p>Grand Total</p></Col>
                    <Col><p>{topTotal + bottomScore}</p></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default BoardRow;