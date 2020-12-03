import { Button, Col, Row, Form, Container, Modal } from "react-bootstrap";
import React, { useState} from "react";
import "../style/addTask.css";
import { firebase } from "../firebase/firebase.config";
import { addSub } from "../controllers/user";



export function MydModalWithGrid({ show, onHide, idDoc }) {
  const [descripcion, setDescripcion] = useState("");
  const [fechaPlazo, setFechaPlazo] = useState("");
  const [areaEncargada, setAreaEncargada] = useState("");

  const handleDescripcion = (e) => setDescripcion(e.currentTarget.value);
  const handleFechaPlazo = (e) => setFechaPlazo(e.currentTarget.value);
  const handleAreaEncargada = (e) => setAreaEncargada(e.currentTarget.value);

  const handleClick = () => {
    addSub(idDoc, {
      descripcion,
      fechaPlazo,
      areaEncargada,
      completada: "No completada",
      
      modificacion:firebase.firestore.Timestamp.now(),
    });
   onHide();
   setDescripcion("")
   setFechaPlazo("")
   setAreaEncargada("")
  };


  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title className="new"id="contained-modal-title-vcenter">
          Agregar tarea
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Form.Group as={Col} controlId="info">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={handleDescripcion}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} controlId="area">
                <Form.Label>Área encargada</Form.Label>
                <Form.Control
                  required
                  className="input-form"
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleAreaEncargada}
                >
                  <option>Selecciona...</option>
                  <option>TGP G.Legal </option>
                  <option>TGP G.Sostenibilidad y comunicación</option>
                  <option>TGP G.Planeación y control </option>
                  <option>TGP G.Cormercial y Operaciones </option>
                  <option>COGA G. de Abastecimientos</option>
                  <option>COGA G. de  Gestión Humana y Transformación</option>
                  <option>COGA Contabilidad e Impuestos </option>
                  <option>COGA Tecnología de la Información </option>
                  <option>COGA G. de Planeaminto y Control de Gestión</option>
                  <option>COGA G. de Auditoría y Gestión de Riesgos</option>
                  <option>COGA G. Legal y Cumplimiento Regulatorio </option>
                  <option>COGA G. de  Operaciones</option>
                  <option>COGA Proyectos y Seguridad de Procesos</option>
                  <option>COGA Operación y mantenimiento</option>
                  <option>COGA Seguridad y Salud Ocupacional</option>
                  <option>COGA Transporte</option>
                  <option>COGA Gestión de activos </option>
                  <option>COGA Medio Ambiente</option>
                  <option> Gestión Social</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} controlId="fecha">
                <Form.Label>Fecha Plazo para completar tarea</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaPlazo}
                  onChange={handleFechaPlazo}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn add" onClick={handleClick}>
        
          Guardar
        </Button>
      </Modal.Footer>
      
    </Modal>
  );
}

export default MydModalWithGrid;
