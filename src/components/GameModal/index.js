import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";

function GameModal(props) {
    return (
        <div>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={() => props.close()}>
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                    <i className="fas fa-times" onClick={() => props.close()}></i>
                </Modal.Header>
                <Modal.Body>
                    <h5>{props.message}</h5>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default GameModal;