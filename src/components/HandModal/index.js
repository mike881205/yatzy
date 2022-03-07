import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const HandModal = ({ show, modalContent, handleClose, selectHand }) => {

    const {name, points} = modalContent;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>Select Hand</Modal.Title>
            </Modal.Header>
            <Modal.Body>Select "{name}" for {points} point(s)?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Nope!</Button>
                <Button variant="primary" onClick={() => selectHand(modalContent)}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HandModal;
