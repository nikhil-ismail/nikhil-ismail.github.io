import React from 'react';
import { Modal, Button } from "react-bootstrap";
import './ImageModal.css';

const ImageModal = (props) => {

  /*
      <h1>Astronomy picture of the day</h1>
      <Button onClick={props.toggleModal}>Close</Button>
  */

  return (
    <div className="modal">
      <div className="image-modal-card">
        <p className="close-container" onClick={props.toggleModal}>X</p>
        <div className="image-container">
            <img
                className="img"
                alt="post"
                src={props.image}
            />
        </div>
      </div>
    </div>
  );
}

export default ImageModal;