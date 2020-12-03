import React, { useState } from "react";
import { firebase, storage } from "../firebase/firebase.config";
import { addDocument } from "../firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col, Container } from "react-bootstrap";

export default function Upload() {
  const [file, setFile] = useState("");
  const [url, setURL] = useState("");
  const [entity, setEntity] = useState("");
  const [record, setRecord] = useState("");
  const [reason, setReason] = useState("");
  const [topic, setTopic] = useState("");

  const handleEntity = (e) => setEntity(e.currentTarget.value);
  const handleRecord = (e) => setRecord(e.currentTarget.value);
  const handleReason = (e) => setReason(e.currentTarget.value);
  const handleTopic = (e) => setTopic(e.currentTarget.value);

  function handleUpload(file) {
    const uploadTask = storage.ref(`oficios/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("oficios")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setURL(url);
        });
    });
  }

  function handleChange(e) {
    const file = e.target.files[0];
    handleUpload(file);
    setFile(file);
  }

  // function addDocument(data) {
  //   db.collection("expedientes").add(data);
  // }

  function handleSend() {
    const info = {
      entidad: entity,
      tema: topic,
      archivo: url,
      Nº_Expediente: record,
      Motivo: reason,
      fecha: firebase.firestore.Timestamp.now(),
    };

    addDocument(info);
    setFile(null);
    setEntity("");
    setRecord("");
    setReason("");
    setTopic("");
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Número de Expediente</Form.Label>
              <Form.Control
                type="number"
                value={record}
                onChange={handleRecord}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Entidad</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={handleEntity}
              >
                <option>Selecciona...</option>
                <option>OSINERGMIN</option>
                <option>OEFA</option>
                <option>MINEM</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Tema</Form.Label>
              <Form.Control value={topic} onChange={handleTopic} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Motivo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reason}
              onChange={handleReason}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Sube el documento"
              type="file"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" disabled={!file} onClick={handleSend}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
