import React, { useState, useEffect } from 'react';
import Menu from '../components/menu';
import axios from 'axios';




const Users = () => {
    let [usuarios, setUsuarios] = useState([]);
    

    useEffect(() => {

        const rest = (async () => {
            await axios.post('http://localhost/CRUD/peticiones.php', { 'peticion': 'OBTENER' }).then((res) => {
                setUsuarios([...usuarios, res]);
                // for(let cantidad = 0; cantidad <= res.data.length; cantidad++){
                //     setUsuarios([...usuarios, res.data[cantidad]]);
                // }
                
            });
        }
        )
        rest()
    }
        , [usuarios]);
    
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
                    {
                        usuarios.map((item) => {

                            <tr>
                                <th scope="row">3</th>
                                <td>{item.data}</td>
                                <td>@twitter</td>
                            </tr>
                        })
                    }
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