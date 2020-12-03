import React, { useState, useRef } from 'react';
import { logIn } from '../firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';
import logo from '../img/logotitle.svg'
import '../style/login.css';


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState();
    const [buttonlog, setButtonlog] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!new RegExp(/(@tgp\.com\.pe)$/).test(emailRef.current.value)) {
            return setError('Correo electrónico no válido se requiere un correo de TPG');
        }

        try {
            setError('');
            setButtonlog(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            history.push('/home');
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
            <img src={logo} alt="logo" className="menu-logo" width='150' height='auto'/>
                <p className='principal-name'>Reducer</p>
                <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group >
                        <Form.Label >
                            Correo electrónico
                    <Form.Control type="email"  className='inputLogin' required ref={emailRef} placeholder="mdiaz@tgp.com.pe" />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Contraseña
                    <Form.Control type="password" className='inputLogin' required ref={passwordRef} placeholder="Password" />
                        </Form.Label>
                        <div className="login-links">
                    <Link to='/recover'> Recuperar Contraseña </Link>
                    <Link to='/signup'> Registrarse </Link>
                    </div>
                    </Form.Group>
                    <Button disabled={buttonlog}  className='initial-button-class' type="submit">INGRESAR</Button>
                </Form> 
            </div>
        </section>
    )
}
