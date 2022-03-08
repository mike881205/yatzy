import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HandRow from "../HandRow";

const BoardRow = ({ scoreBoard, topScore, bottomScore, handleShow }) => {

    return (
        <Row style={{margin: '1%'}}>
            <Col>
                <Row>
                    <Col>
                        {scoreBoard[0].map((hand, i) => { return <HandRow key={`top ${i}`} handleShow={handleShow} hand={hand} board={0} index={i} /> })}
                        <Row style={{margin: '.5%', border: 'solid white', color: 'white'}}>
                        <Col><p>.</p></Col>
                        </Row>
                        <Row style={{margin: '.5%', border: 'solid white',color: 'white'}}>
                        <Col><p>.</p></Col>
                        </Row>
                        <br></br>
                        <Row className="btn-secondary" style={{margin: '.5%', border: 'solid black', color: 'black'}}>
                            <Col><p>Top Total</p></Col>
                            <Col><p>{topScore}</p></Col>
                        </Row>
                    </Col>
                    <Col>
                        {scoreBoard[1].map((hand, i) => { return <HandRow key={`bottom ${i}`} handleShow={handleShow} hand={hand} board={1} index={i} /> })}
                        <br></br>
                        <Row className="btn-secondary" style={{margin: '.5%', border: 'solid black', color: 'black'}}>
                            <Col><p>Bottom Total</p></Col>
                            <Col><p>{bottomScore}</p></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default BoardRow;