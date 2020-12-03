import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button,Jumbotron} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../context/AuthContext";
import "../style/dataTable.css";
import "../style/home.css";
import MenuNav from "../components/menu";
import add from "../img/add.png";
import FrontBar from "../components/frontbar";
import MydModalWrapperDoc from "../components/modalDoc";
import ToastTask from '../components/toastTask'

function DataTable() {
  const { allDoc, setviewDoc, taskNot } = useContext(AuthContext);
  const [term, setTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();
  const dateNow = new Date();
  const notificacion = taskNot ? taskNot.map(task => {
    const firebaseDate = Date.parse(task.fechaPlazo);
    const diffTime = Math.abs(firebaseDate - dateNow);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 10 ? { 'days': diffDays, 'areaEncargada': task.areaEncargada, 'tema': task.tema } : {}
  }) : [];  
  const stateNote = sessionStorage.getItem('state');

  useEffect(() => {
    const setStateNot = setTimeout(function (){ sessionStorage.setItem('state', true)}, 3000)

    return ( ) => setStateNot;
  }, [])

  const handleFileRedirect = (file) => {
    localStorage.setItem('file', file)
    history.push("/documentDetail");
  };
  const addDataTable = () => {
    history.push("/dataTable");
  };

  const seeDetailInModal = (file) => {
    setviewDoc(file)
    setModalShow(true);
  };

  function searchingTerm(term) {
    return function (x) {
      return (
        x.entidad.toLowerCase().includes(term.toLowerCase()) ||
        x.expediente.includes(term) ||
        x.motivo.toLowerCase().includes(term.toLowerCase()) ||
        x.tema.toLowerCase().includes(term.toLowerCase()) ||
        !term
      );
    };
  }

  return (
    <div  className="page">
      <div className='notification-container'>
        {(!stateNote && notificacion) && notificacion.map((item,i) => {
          if (item.days === 10) {
            return <ToastTask key={'days'+ item.days + i} time={item.days} area={item.areaEncargada} topic={item.tema} color={'relax'} />
          }
          if (item.days === 5) {
            return <ToastTask key={'days' + item.days + i} time={item.days} area={item.areaEncargada} topic={item.tema} color={'warn'} />
          }
          return (item.days <= 3) ? <ToastTask key={'days' + item.days + i} time={item.days} area={item.areaEncargada} topic={item.tema} color={'fail'} /> : null
        })
      }
      </div>
      <MenuNav />
      <div className="row row-home">
        <div>
          <div className="page-content">
            <FrontBar
              searcher={
                <input
                  className="form-control form-searcher"
                  name="term"
                  maxLength="16"
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="Buscar"
                />
              }
            ></FrontBar>
            <div className='button-container'>
              <button className="btn add" onClick={addDataTable}>
                <img src={add} alt="" />
                <div>AGREGAR DOCUMENTO</div>
              </button>
            </div>
            <div className="container-tabla">
            <table className="table table-bordered table table-striped">
              <thead className="header">
                <tr>
                  <th>Entidad</th>
                  <th>Número de Expediente</th>
                  <th>Motivo</th>
                  <th>Tema</th>
                  <th>Fecha de recepción</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-body">
                {allDoc.filter(searchingTerm(term)).map((i) => {
                  return (
                    <tr key={i.id}>
                      <td className="box-container tabla-item">{i.entidad}</td>
                      <td className="box-container tabla-item">{i.expediente}</td>
                      <td className="box-container tabla-item">{i.motivo}</td>
                      <td className="box-container tabla-item">{i.tema}</td>
                      <td className="box-container tabla-item">{i.fecha_entrada}</td>
                      <td>
                        <Button variant="link"
                          onClick={() => seeDetailInModal(i.id)}>Detalles</Button>
                        <MydModalWrapperDoc show={modalShow} onHide={() => setModalShow(false)} />
                      </td>
                      <td>
                        <Button
                          variant="link"
                          onClick={() => handleFileRedirect(i.id)}
                        >
                          Ver todo
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataTable;
