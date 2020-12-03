import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ListDocument from "../components/listDocument";
import { Button, Table } from "react-bootstrap";
import MydModalWithGrid from "../components/addTask";
import ModalAddCont from '../components/modalCont';
import ModalEditTask from "../components/modalEditTask";
import ModalExp from "../components/modalExpJud.jsx";
import MenuNav from "../components/menu";
import "../style/documentDetail.css";
import FrontBar from "../components/frontbar";
import { db, getEditTask } from "../firebase/firebase.config";





export default function DocumentDetail() {
  const { allDoc } = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  console.log(modalShow2)

  const [showEdit, setEdit] = useState(false);
  const [somo, setM] = useState("");
 
  const viewDoc = localStorage.getItem("file");

  const document = allDoc.find((doc) => doc.id === viewDoc);
  const [tareas, setTareas] = useState([]);
 

  useEffect(() => {
   
   const colecion = db.collection("documents")
   colecion.doc(viewDoc)
      .collection("tareas")
      .onSnapshot((querySnapshot) => {
        const arrayData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          arrayData.push({ ...data, idTask: doc.id });
        });
        setTareas(arrayData);
      });
    return colecion 
 
  }, []);

  

  const handlem = async (e)   => {
      const doc = await getEditTask(viewDoc, e.currentTarget.id);
      const post = doc.data();
      localStorage.setItem('docID', JSON.stringify(post));
      localStorage.setItem('id', doc.id);
      const  idTask = localStorage.getItem("id");
      setM(idTask)
      setEdit(true)
    };

    
  
   
  return (
    <section className="documentDetail-container">
      <MenuNav />

      <div className="document-detail-main">
        <FrontBar />
        {document && (
        <div className="documentDetail-container">
          
            <div className="description-document">
              <h1 className="input-form">{document.tema}</h1>
              <ListDocument data={document} />
              <Table>
                <tbody>
                  <tr>
                    <td>Monto de Contingencia</td>
                    <td className="input-form">UIT- {document.cantidad} soles - {document.comentario}</td>
                  </tr>
                  <tr>
                    <td>N° expediente judicial</td>
                    <td className="input-form">{document.exp}</td>
                  </tr>
                  <tr>
                    <td>Archivos Adjuntos</td>
                    <td className="input-form">
                      {document.archivo && (
                        <a href={document.archivo} target="blank">
                          {document.expediente}
                        </a>
                      )}
                      {document.link && (
                        <a href={document.link} target="blank">
                          {document.expediente}
                        </a>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          
        
          <div>
            <Button
              variant="primary"
              className="add fix"
              onClick={() => setModalShow(true)}
            >
              AGREGAR TAREA
            </Button>
            <Button variant="primary" className="add fix" onClick={() => setModalShow1(true)}>
             MONTO DE CONTINGENCIA
            </Button>

          
            <Button variant="primary" className="add fix" onClick={() => setModalShow2(true)}>
             N° EXP. JUDICIAL
            </Button>
 

          </div>
          
        </div>
      )}
        {document && (
        <div className="taskDetail-container">
        <MydModalWithGrid   show={modalShow} onHide={() => setModalShow(false)}  idDoc={viewDoc} exp={document.expediente} />
        <ModalAddCont   show={modalShow1} onHide={() => setModalShow1(false)}  idDoc={viewDoc} exp={document.expediente} />
        <ModalExp  show={modalShow2} onHide={() => setModalShow2(false)}  idDoc={viewDoc} exp={document.expediente} />
          <Table className="table table-striped table-bordered">
            <thead className="header">
              <tr>
                <th>Estado</th>
                <th>Descripción</th>
                <th>Área Encargada</th>
                <th>Fecha</th>
                <th />
              </tr>
            </thead>
            <tbody className="table-body">
            
              {document &&
                tareas.map((dataTask) => (
                  <tr key={dataTask.idTask}>
                    <td className="box-container tabla-item">{dataTask.completada}</td>
                    <td className="box-container tabla-item">{dataTask.descripcion}</td>
                    <td className="box-container tabla-item">{dataTask.areaEncargada}</td>
                    <td className="box-container tabla-item">{dataTask.fechaPlazo}</td>
                    <td>
                   
                 
                    <Button  id={dataTask.idTask}  name={dataTask.completada} variant="link" onClick={handlem}>
                        Editar
                      </Button>
                      {somo !=="" ? (
                      <ModalEditTask
                      key={dataTask.id}
                        shows={showEdit}
                        onHides={() => setEdit(false)}
                        idDocu={viewDoc}
                      />
                      ): null}
                    </td>
            
                  </tr>
                ))}
            </tbody>
          </Table>

        </div>
        )}
      </div>
    </section>
  );
                }
