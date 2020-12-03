import React, {useState} from 'react';
import { Container, Modal,Button,Row,Col ,Form } from "react-bootstrap";
import { updateQuantity} from "../firebase/firestore";

function ModalExp  (props) {
  const [exp, setExp] = useState('');
  const viewDoc = localStorage.getItem("file");
 
  const handleChange = (e) => setExp(e.target.value);

  const addQuantity = () => {
    updateQuantity(viewDoc,{
      exp:exp,
    });
    setExp("")
   
  };


    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title className="new"  id="contained-modal-title-vcenter">
            Anexo expediente judicial
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="content">N° de expediente judicial</Form.Label>
                <Form.Control
                  type="text"
                  value={exp}
                  onChange={handleChange}
          
                />
              </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn add" onClick={addQuantity}>GUARDAR</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ModalExp;
 