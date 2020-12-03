import React, { useRef, useState } from 'react';
import { signup } from '../firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Button, Form, Row, Col } from 'react-bootstrap';
import '../style/signUp.css';
import logo from '../img/logotitle.svg';


export default function SignUp() {
    const registerNameRef = useRef();
    const registerEmailRef = useRef();
    const registerPasswordRef = useRef();
    const registerConfirmPasswordRef = useRef();
    const [error, setError] = useState();
    const [buttonlog, setButtonlog] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(registerEmailRef.current.value)
        if (!new RegExp(/(@tgp\.com\.pe)$/).test(registerEmailRef.current.value)) {
            return setError('Para registrarte debes usar un correo de TGP');
        }

        if (registerPasswordRef.current.value !== registerConfirmPasswordRef.current.value) {
            return setError('Las contraseñas no son iguales');
        }

        try {
            setError('');
            setButtonlog(true);
            await signup(registerEmailRef.current.value, registerPasswordRef.current.value, registerNameRef.current.value);
            history.push('/home');
        } catch {
            setError('No se pudo crear la cuenta')
        }
        setButtonlog(false)
    }

    return (
        <section className='signup'>
            <div className='image-login'>
            </div>
            <div className='register-form'>
            <img src={logo} alt="logo" className="menu-logo" width='150' height='auto'/>

                <Form onSubmit={handleSubmit} className='register-form'>
                <p className='principal-name'>Reducer</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Nombre
                                <Form.Control type="text" className='inputLogin' required placeholder="Mario Diaz" ref={registerNameRef} />
                                </Form.Label>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group >
                                <Form.Label >
                                    Correo electrónico
                                    <Form.Control type="email" className='inputLogin' required ref={registerEmailRef}
                                        placeholder="mdiaz@tgp.com.pe"
                                        title='Para registrarte debes tener un correo de TGP'
                                    />
                                </Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Contraseña
                    <Form.Control type="password"
                                        className='inputLogin'
                                        required
                                        pattern=".{6,}"
                                        title="Debe contener 6 o más carácteres"
                                        ref={registerPasswordRef} />
                                </Form.Label>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Confirmar Contraseña
                    <Form.Control type="password" className='inputLogin' required ref={registerConfirmPasswordRef} />
                                </Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button disabled={buttonlog} className='register-links initial-button-class' type="submit" >REGISTRARSE</Button>
                    <br />
                    <Link to='/'> Iniciar Sesión </Link>
                </Form>
            </div>
        </section>
    )
}
