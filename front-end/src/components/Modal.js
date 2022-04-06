import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "../css/modal.css";

const ModalnButton = () => {

    function addBook() {
        <Modal

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
        </Modal>
        // <Modal.Dialog>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Modal title</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button variant="secondary">Close</Button>
        //         <Button variant="primary">Save changes</Button>
        //     </Modal.Footer>
        // </Modal.Dialog>
    }

    return (
        <Button className='btn' onClick={addBook()}>+ Add Book</Button>
    )
}

export default ModalnButton;