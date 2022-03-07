import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const HandModal = ({ show, modalContent, handleClose }) => {

    const {name, points} = modalContent;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>Select Hand</Modal.Title>
            </Modal.Header>
            <Modal.Body>Select "{name}" for {points} point(s)?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Nope!</Button>
                <Button variant="primary" onClick={handleClose}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HandModal;
