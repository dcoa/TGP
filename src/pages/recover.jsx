import React, { useState, useRef } from 'react';
import { recoverPass } from '../firebase/auth';
import { Link } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';

export default function Recover() {
    const emailRef = useRef();
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [buttonlog, setButtonlog] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!new RegExp(/(@tgp\.com\.pe)$/).test(emailRef.current.value)) {
            return setError('Correo electrónico no válido se requiere un correo de TPG');
        }

        try {
            setError('');
            setButtonlog(true);
            await recoverPass(emailRef.current.value);
            setMessage(`Hemos enviado un email a ${emailRef.current.value} para cambiar la contraseña`)
        } catch {
            setError('No se puede iniciar sesión');
        }
        setButtonlog(false);
    }
    return (
        <section className='login'>
            <div className='image-login'>
                <div></div>
            </div>
            <div className='login-form'>
                <p>Recuperar contraseña</p>
                <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form.Group >
                        <Form.Label >
                            Correo electrónico
                        <Form.Control type="email" className='inputLogin' required ref={emailRef} placeholder="mdiaz@tgp.com.pe" />
                        </Form.Label>
                    </Form.Group>
                    <Button disabled={buttonlog} type="submit">ENVIAR</Button>
                    <div className="recover-links" style={{ margin: 30 }}>
                        <Link to='/login'> Iniciar Sesión </Link>
                    </div>
                </Form>

            </div>
        </section>
    )
}
