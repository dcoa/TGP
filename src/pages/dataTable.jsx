/*import React from 'react';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {getUsers} from  '../controllers/user';

import '../style/dataTable.css'*/

import React from 'react';
import { useState ,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers } from '../controllers/user';
import '../style/dataTable.css';
import NavigationBar from '../components/navBar';

const DataTable = () => {

  const [dataDoc, setData] = useState([]);
  const [term, setTerm] = useState('');

  function searchingTerm(term) {
    return function (x) {
      return x.entidad.toLowerCase().includes(term.toLowerCase()) ||
        x.expediente.includes(term) || x.motivo.toLowerCase().includes(term.toLowerCase()) || x.tema.toLowerCase().includes(term.toLowerCase()) ||
        !term;

    }
  }


  useEffect(() => {
    setData([]);
    getUsers((data) => setData(data))
  }, []);

  return (
    <div className="container-fluid">
      <NavigationBar/>
      <form>
        <input name="term" maxLength="16" onChange={e => setTerm(e.target.value)} placeholder="buscar por..." autofocus required />
        <button type="submit">ir</button>
      </form>

      <table className="table table-bordered">
        <thead className="header">
          <tr>
            <th>Entidad</th>
            <th>Número de Expediente</th>
            <th>Motivo</th>
            <th>Tema</th>
            <th>Fecha de recepción</th>
          </tr>
        </thead>
        <tbody>
          {dataDoc.filter(searchingTerm(term)).map(i => {
            // console.log(i);
            return <tr key={i}>
              <td>{i.entidad}</td>
              <td>{i.expediente}</td>
              <td>{i.motivo}</td>
              <td>{i.tema}</td>
              <td>{i.date}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;