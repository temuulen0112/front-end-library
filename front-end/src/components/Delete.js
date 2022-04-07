import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Delete = (props) => {
    const [remove, setRemove] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeBook = (e) => {
        setRemove(true)
        console.log(e)
        fetch(`http://18.140.66.242:3002/deleteBook/${e}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(() => {
                setRemove(false)
                handleClose()
            })
    }

    return (
        <>
            <div onClick={() => handleShow()}>
                <img src='/img/trash.png' alt="" />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this book?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => removeBook(props.data)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete;