import React, {useState} from "react";
import { Button, Modal, Container, FormControl, Form, Col, InputGroup,Table} from "react-bootstrap";
import "../style/modalCont.css";
import { updateQuantity } from "../firebase/firestore";

function ModalAddCont(props) {

    const [cantidad, setCantidad] = useState('');
    const [comentario, setComentario] = useState('');
    const viewDoc = localStorage.getItem("file");

    const handleCantidad = (e) => setCantidad(e.target.value);
    const handleComentario = (e) => setComentario(e.target.value);

      const addQuantity = () => {
        updateQuantity(viewDoc,{
          cantidad: cantidad,
          comentario: comentario,
        });
        setCantidad("")
        setComentario("")
      };
  
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="new" id="contained-modal-title-vcenter">
                    Agregar monto de contingencia
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                <Table>
                <InputGroup className="box" as={Col} controlId="formGridZip">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">S/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            placeholder="Ingrese monto"
                            aria-describedby="basic-addon1"
                            type="text"
                            value={cantidad}
                            onChange={handleCantidad }
                        />
                    </InputGroup>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="content">DETALLE DEL GASTO</Form.Label>
                            <Form.Control 
                                as="textarea"
                                type="text"
                                value={comentario}
                                onChange={handleComentario}
                                
                            />
                        </Form.Group>
                    </Col>
                </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn add" onClick={addQuantity}>AGREGAR</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalAddCont;
