import React from 'react';
import { Table } from 'react-bootstrap';

export default function ListDocument({ data }) {
    return (
            <Table>
                <tbody>
                    <tr>
                        <td>Entidad</td>
                        <td>{data.entidad}</td>
                    </tr>
                    <tr>
                        <td>No.Expedinete</td>
                        <td>{data.expediente}</td>
                    </tr>
                    <tr>
                        <td>Motivo</td>
                        <td>{data.motivo}</td>
                    </tr>
                    <tr>
                        <td>Tema</td>
                        <td>{data.tema}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Recepción</td>
                        <td>{data['fecha_entrada']}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Vencimiento</td>
                        <td>{data['fecha_expiracion']}</td>
                    </tr>
                    <tr>
                        <td>Área Encargada</td>
                        <td>{data['Area']}</td>
                    </tr>
                    <tr>
                        <td>Otros</td>
                        <td>{data['Otros']}</td>
                    </tr>
                    
                </tbody>
            </Table>
    )
}
