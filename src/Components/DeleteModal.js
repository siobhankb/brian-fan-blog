import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function DeleteConfirmation(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-danger">
            Are you sure you want to delete this post? This is permanent!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=> props.confirmModal(props.type, props.id) } >Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
