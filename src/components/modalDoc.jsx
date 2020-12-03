
import React, {useContext} from 'react';
import { Table,Container, Modal } from "react-bootstrap";
//import { getUsers} from '../controllers/user'
import "../style/modalDoc.css";
import { AuthContext } from "../context/AuthContext";



export function MydModalWrapperDoc(props) {
    const { viewDoc,allDoc } = useContext(AuthContext);
    const document = allDoc.find(doc => doc.id === viewDoc);
    
    return (
      <Modal {...props} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        
        <Modal.Header closeButton>
          <Modal.Title className="new" id="contained-modal-title-vcenter">
            Detalles de documento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          <Table>
                <tbody>
                { document && 
                  <div >
                    <tr>
                        <tr >
                        <th >Entidad</th>
                        <td >{document.entidad}</td>
                       </tr>
                       <tr>
                        <th>No.Expediente</th>
                        <td>{document.expediente}</td>
                    </tr>
                    <tr>
                        <th>Motivo</th>
                        <td>{document.motivo}</td>
                    </tr>
                    <tr>
                        <th>Tema</th>
                        <td>{document.tema}</td>
                    </tr>
                    <tr>
                        <th>Fecha de Recepción</th>
                        <td>{document['fecha_entrada']}</td>
                    </tr>
                    <tr>
                        <th>Fecha de Vencimiento</th>
                        <td>{document['fecha_expiracion']}</td>
                    </tr>
                    <tr>
                        <th>Área Encargada</th>
                        <td>{document['Area']}</td>
                    </tr>
                    <tr>
                        <th>Otros</th>
                        <td>{document['Otros']}</td>
                    </tr>
                     
                    </tr>
                </div>
                }

                </tbody>
            </Table>
  
          </Container>
        </Modal.Body>
       
      </Modal>
    );
  }

  export default MydModalWrapperDoc;