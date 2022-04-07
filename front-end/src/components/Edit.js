import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Edit = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (e) => {
        e.preventDefault()
        fetch(`http://18.140.66.242:3002/updateBook/${props.book.isbn}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "name": e.target[0].value,
                    "price": e.target[1].value,
                    "author": e.target[2].value,
                    "isbn": e.target[3].value,
                    "pubdate": e.target[4].value,
                }
            )
        })
            .then(res => res.json())
            .then(() => {
                handleClose()
            })
    }
    return (
        <>
            <img src='/img/edit.png' alt="" onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEdit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="Name" defaultValue={props.book.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="Price" defaultValue={props.book.price}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="Author" defaultValue={props.book.author}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="ISBN" defaultValue={props.book.isbn}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="date" placeholder="Published Date" defaultValue={props.book.pubdate}
                            />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Edit;