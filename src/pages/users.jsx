import React, { useState } from 'react';
import Menu from '../components/menu';
import axios from 'axios';
import { useEffect } from 'react';



const Users = () => {

    let [usuarios, setUsuarios] = useState([]);
    const consultarDatos = async () => {
        await axios.post('http://localhost/CRUD/peticiones.php', { 'peticion': 'OBTENER' }).then((res) => {
            setUsuarios(res)
            
        })
    }
    consultarDatos();
    // useEffect(
        
    // )
    return (
        <div>
            <Menu></Menu>
            <h1>
                Users
            </h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">IP</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Visitas</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>

        </div>
    )
}

export default Users