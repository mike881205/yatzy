import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const HandModal = ({ show, handleClose, selectedHand, selectHand }) => {

    const {name, points, remove} = selectedHand;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body> {remove ? `Rmove "${name}"?` : `Select "${name}" for ${points} point(s)?`}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Nope!</Button>
                <Button variant="primary" onClick={() => selectHand(selectedHand)}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HandModal;
