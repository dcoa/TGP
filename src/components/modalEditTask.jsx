import { Button, Col, Form, Container, Modal } from "react-bootstrap";
import { firebase } from "../firebase/firebase.config";
import React, { useState } from "react";
import "../style/modalEdit.css";
import { updateTask } from "../firebase/firestore";

function ModalEditTask({
  shows,
  onHides,
  idDocu,
  
}) {
  const [fechaU, setFechaU] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [estado, setEstado] = useState("");
  const [link1, setLink1] = useState("");
  const [namelink1, setNameLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [nameLink2, setNameLink2] = useState("");

  const handleFechaU = (e) => setFechaU(e.currentTarget.value);

  const handleObservaciones = (e) => setObservaciones(e.currentTarget.value);
  const handleEstado = (e) => setEstado(e.currentTarget.value);
  const handleLink1 = (e) => setLink1(e.currentTarget.value);
  const handleNameLink1 = (e) => setNameLink1(e.currentTarget.value);
  const handleLink2 = (e) => setLink2(e.currentTarget.value);
  const handleNameLink2 = (e) => setNameLink2(e.currentTarget.value);




  const edit = localStorage.getItem("docID");
  const listo = JSON.parse(edit)
  const titulo = listo.descripcion
  const  area   = listo.areaEncargada
  const  idTask = localStorage.getItem("id");
  const fechaLimite =  listo.fechaPlazo;

  // console.log(titulo)

  const handleClick = () => {
    updateTask(idDocu, idTask, {
      fechaPlazo: fechaU,
      completada: estado,
      observaciones: observaciones,
      link1: [namelink1, link1],
      link2: [nameLink2, link2],
      modificacion: firebase.firestore.Timestamp.now(),
    });
       onHides();
       setFechaU("");
       setObservaciones("");
       setEstado("");
       setLink1("");
       setNameLink1("");
       setLink2("");
       setNameLink2("");
  };

  return (
  
    <Modal show={shows} onHide={onHides} size="lg">
      
      <Modal.Header closeButton>
        <Modal.Title>Editar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {edit && 
      <>
        <div className="modal-flex">
          <p> <b>Titulo de la Tarea:</b> </p>
          <p className="modal-item"> {titulo} </p>
        </div>
        <div className="modal-flex">
          <p> <b> Area encargada:</b> </p>
          <p className="modal-item"> {area}</p> 
          
        </div>
        <div className="modal-flex">
          <p> <b>Última modificación:</b></p>
          <p className="modal-text"> <b>Fecha plazo:</b></p>
          <p className="modal-item"> {fechaLimite}</p>
        </div>

        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formdate">
                <Form.Label>Actualizar fecha limite:</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaU}
                  onChange={handleFechaU}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="estado">
                <Form.Label>Estado de la tarea:</Form.Label>
                <Form.Control
                  required
                  className="input-form"
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleEstado}
                >
                  <option>Selecciona...</option>
                  <option>Proceso</option>
                  <option>Completada</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGlink">
                <Form.Label>Nombre del link</Form.Label>
                <Form.Control
                  value={namelink1}
                  onChange={handleNameLink1}
                  required
                  className="input-form"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formlink">
                <Form.Label>link</Form.Label>
                <Form.Control
                  type
                  value={link1}
                  onChange={handleLink1}
                  required
                  className="input-form"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGlink">
                <Form.Label>Nombre del link</Form.Label>
                <Form.Control
                  value={nameLink2}
                  onChange={handleNameLink2}
                  required
                  className="input-form"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formlink">
                <Form.Label>link</Form.Label>
                <Form.Control
                  type
                  value={link2}
                  onChange={handleLink2}
                  required
                  className="input-form"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                className="input-form"
                as="textarea"
                rows={3}
                value={observaciones}
                onChange={handleObservaciones}
                required
              />
            </Form.Group>
          </Form>
        </Container>
        </>
        }
      </Modal.Body>
       
      <Modal.Footer>
        <Button  className="btn-modal-edit"  onClick={handleClick}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditTask;
