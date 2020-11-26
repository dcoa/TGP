
import React, {useContext} from 'react';
import { Table,Container, Modal } from "react-bootstrap";
//import { getUsers} from '../controllers/user'
import "../style/modalDoc.css";
import { AuthContext } from "../context/AuthContext";



export function MydModalWrapperDoc(props) {
    const { viewDoc,allDoc } = useContext(AuthContext);
    const document = allDoc.find(doc => doc.id === viewDoc);
    console.log(viewDoc)
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Detalles de documento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          <Table>
                <tbody>
                { document &&   
                    <tr>
                        <tr>
                        <td>Entidad</td>
                        <td>{document.entidad}</td>
                       </tr>
                       <tr>
                        <td>No.Expediente</td>
                        <td>{document.expediente}</td>
                    </tr>
                    <tr>
                        <td>Motivo</td>
                        <td>{document.motivo}</td>
                    </tr>
                    <tr>
                        <td>Tema</td>
                        <td>{document.tema}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Recepción</td>
                        <td>{document['fecha_entrada']}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Vencimiento</td>
                        <td>{document['fecha_expiracion']}</td>
                    </tr>
                    <tr>
                        <td>Área Encargada</td>
                        <td>{document['Area']}</td>
                    </tr>
                    <tr>
                        <td>Otros</td>
                        <td>{document['Otros']}</td>
                    </tr>
                     
                    </tr>
                
                }
                    
                </tbody>
            </Table>
  
          </Container>
        </Modal.Body>
       
      </Modal>
    );
  }

  export default MydModalWrapperDoc