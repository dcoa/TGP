import React, {useState} from 'react';
import { Toast } from "react-bootstrap";
import '../style/ToastTask.css'


export default function ToastTask({time, area, topic, color}) {
    const [show, setShow] = useState(true);

    return (
        <Toast onClose={() => setShow(false)} show={show} delay={15000} autohide className={color}>
          <Toast.Header>
            <strong className="mr-auto"> {time} día(s) para caducar</strong>
          </Toast.Header>
    <Toast.Body className={color}>Tarea de {topic} desarrollada por {area}</Toast.Body>
        </Toast>
    )
}
