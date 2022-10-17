import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from 'react-router-dom';

//Componentes
import Menu from '../components/menu';
//Recursos de las tarjetas
import Logo from '../images/logo.png';
import Inventario from "../images/inventario.png";
import Notas from "../images/notas.png";
import Fiscal from "../images/fiscal.png";
import Factura from "../images/factura.png";
import Cliente from "../images/cliente.png";
import Prove from "../images/proveedores.png";
//recursos de los flip left
import Interfaz from "../images/interfaz.PNG";
import Reportes from "../images/reportes.PNG";
import Usuarios from "../images/usuarios.PNG";
// recursos de contactanos
import Mensaje from "../images/mensaje.png";
import axios from "axios";




function Home() {

    // let [contador, setContador] = useState(0);

    // // IP del cliente
    // let [ipCliente, setIpCliente] = useState('');
    // // Localizacion
    // let [geoIP, setGeoIP] = useState('');

    // axios.get('https://api.ipify.org?format=json').then((res) => { return setIpCliente(res.data.ip) });

    // axios.get(`http://ipwho.is/${ipCliente}`).then((res) => { return setGeoIP(res.data) });

    // // const insertar = async () => {
    // //     await axios.post('http://localhost/CRUD/insertar.php', { 'numero': 1 }).then((resultado) => {
    // //         setContador(resultado.data);
    // //     })
    // //     return;
    // // }
    // console.log(geoIP)

    // const insertarDatos = async () => {
    //     await axios.post('http://localhost/CRUD/insertar.php', { 'ip': `${ipCliente}`, 'datos': `${JSON.stringify(geoIP)}`, 'contador': 1 });
    //     return 0;
    // }
    // insertarDatos();

    useEffect(() => {
        localStorage.clear();

        if (!localStorage.getItem('ip') && !localStorage.getItem('geoIP')) {
            const rest = () => {

                axios.get('https://api.ipify.org?format=json').then((res) => {
                    if(res.data.ip === 'null'){
                        console.log('Ip is null');
                    } else{
                        localStorage.setItem('ip', res.data.ip);
                    }
                    
                });
            };
            rest();
        }
    }, [])
    let IP = localStorage.getItem('ip');

    axios.get(`https://ipwho.is/${IP}`).then((res) => {
        localStorage.setItem('geoIP', JSON.stringify(res.data));
    });
    let address = localStorage.getItem('geoIP');
    

    const insertarDatos = () => {
        axios.post('https://www.compuhightech.com/wp/CRUD/peticiones.php', {'peticion': 'GUARDAR', 'ip' : IP, 'datos' : address, 'visitas': 1})
        .then((res)=>{


            if(res.status == 200){
                console.log(`${res.data}`)}})
        
    }
    // JSON.parse(localStorage.getItem('geoIP'))
    if (localStorage.getItem('geoIP')){
        insertarDatos();
        console.log('datos enviados')
    }

    return (
        <div>
            <div className='container-fluid header'>
                <Menu />
                <div className='containerEslogan d-flex flex-column'>
                    <div className=' col-md-7 col-lg-7 col-12'>

                        <h1 className='titulo text-light'>
                            Sistema Administrativo
                            Scala
                        </h1>
                        <p className='parrafoTitulo text-light'>
                            Scala es uno de los sistemas más completos y sencillos de manejar
                            agiliza los procesos más agobiantes en un abrir y cerrar de ojos,
                            todo será mucho más rápido para ti y para tus empleados.

                        </p>
                    </div>
                </div>
            </div>
            {/*Loader*/}
            {/* <div className="containerLoader" id="containerLoader">

                <div className="loader">
                </div>
                <img className="imgLoader" src={Logo} alt="logo" title="Logo Sistemas RJD" />
            </div> */}
            <div className='container-fluid main mt-3'>

                {/*Tarjetas*/}

                <div className='container-fluid containerTarjetas d-flex justify-content-center flex-column'>
                    <div className=' col-12 tituloTarjetas'>
                        <h1 className='tituloText'>
                            Increíbles Funciones para
                            tu <br />Empresa
                        </h1>
                        <p className='parrafoText'>Herramientas que facilitaran el control de tu empresa </p>
                    </div>
                    <div className='tarjetas container-fluid col-12 col-sm-10 col-lg-10 p-1 pb-4 d-flex justify-content-center flex-wrap'>

                        <div className='col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center'>

                            <div className='tarjeta m-1' data-aos='zoom-out' data-aos-delay='400'>
                                <img className='iconTarjeta' src={Inventario} alt="inventario-icon" />
                                <h5 className='tituloTarjeta'>Control de Inventario</h5>
                                <p>Solución fácil, maneja rápidamente tus almacenes,
                                    mejora así la eficiencia de cada uno de ellos.
                                </p>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center'>
                            <div className='tarjeta m-1' data-aos='zoom-out' data-aos-delay='500'>
                                <img className='iconTarjeta' src={Notas} alt="inventario-icon" />
                                <h5 className='tituloTarjeta'>Notas de Entrega</h5>
                                <p>Notas de entrega validas al momento y fáciles de generar en diferentes tipos de
                                    moneda.
                                </p>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center'>
                            <div className='tarjeta m-1' data-aos='zoom-out' data-aos-delay='600'>
                                <img className='iconTarjeta' src={Fiscal} alt="inventario-icon" />
                                <h5 className='tituloTarjeta'>Impresora Fiscal</h5>
                                <p>Fácil conexión y configuración de tu impresora fiscal, soporta diferentes modelos y marcas.</p>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center'>
                            <div className='tarjeta m-1' data-aos='zoom-out' data-aos-delay='700'>
                                <img className='iconTarjeta' src={Factura} alt="inventario-icon" />
                                <h5 className='tituloTarjeta'>Facturas</h5>
                                <p>Realiza y emite facturas al alcance de tu mano para mejorar la eficiencia dentro de tu
                                    empresa y evitar complicaciones al momento de revisar tu contabilidad.
                                </p>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center'>
                            <div className='tarjeta m-1' data-aos='zoom-out' data-aos-delay='700'>
                                <img className='iconTarjeta' src={Cliente} alt="inventario-icon" />
                                <h5 className='tituloTarjeta'>Clientes</h5>
                                <p>Una manera rapida de tener información y registro de tus clientes para ofrecer un buen servicio, ofreceles una mayor comodidad al momento de adquirir sus productos.</p>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-sm-6 col-lg-3 box d-flex justify-content-center'>
                            <div className='tarjeta m-1' data-aos='zoom-out' data-aos-delay='700'>
                                <img className='iconTarjeta' src={Prove} alt="inventario-icon" />
                                <h5 className='tituloTarjeta'>Proveedores</h5>
                                <p>Control preciso de tus proveedores, próximos proveedores, información de futuros negocios y mucho más.</p>

                            </div>
                        </div>

                        {/*Slider de imagenes*/}

                        <div className='container-fluid mt-4 p-2'>
                            <div className=' col-12 tituloTarjetas' data-aos='flip-up'>
                                <h1 className='tituloTextScroll'>
                                    Diseñado para las diferentes tipo de empresa<br />
                                    Grandes o Pequeñas
                                </h1>
                                <p className='parrafoScroll'>El principio de Scala Administrativo es ayudar a la empresas a resolver sus desafíos administrativos.
                                    Esto es lo que puede hacer Scala. </p>
                            </div>
                        </div>



                        <div className='container-fluid  d-flex flex-wrap-reverse mb-5 p-2 sliderContainer' data-aos='slide-left' data-aos-duration='1200'>
                            <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-content-center containerTextoDes' >
                                <p className='textDeslizante'>
                                    "Scala administrativo ofrece una interfaz de acuerdo a las necesidades de la empresa, de manera facil y sencilla, rapida de buen manejo.
                                    Para personas no tecnicas , amigable con diferentes opciones con un click al alcanze de tu mano".
                                </p>

                            </div>
                            <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center' >
                                <img className='imgSlide' src={Interfaz} alt="imagen-scala" />
                            </div>
                        </div>

                        <div className='container-fluid  d-flex flex-wrap p-2 mt-5 mb-5 sliderContainer' data-aos='slide-right' data-aos-duration='1200'>

                            <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center' >
                                <img className='imgSlide' src={Reportes} alt="imagen-scala" />
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-content-center containerTextoDes' >
                                <p className='textDeslizante'>
                                    "Algo muy importante en una empresa son los reportes,  SCALA administrativo te ofrece la opcion y la realizacion de diferentes
                                    reportes para la gestion de tu empresa o tu negocio de una manera rapida y efectiva".
                                </p>

                            </div>
                        </div>

                        <div className='container-fluid  d-flex flex-wrap-reverse p-2 mt-5 sliderContainer' data-aos='slide-left' data-aos-duration='1200'>

                            <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-content-center containerTextoDes pt-5' >
                                <p className='textDeslizante'>
                                    "La importancia de los usuarios es indispesable para el manejo y funcionamiento del sistema, por esa razon SCALA administrativo te pemrite no
                                    solo gestionar tu empresa y tu negocio sino tambien administrar las funciones de los usuarios que gestionan el sistema administrativo, mantén mayor seguridad de tus movimientos y tu información".
                                </p>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center' >
                                <img className='imgSlide' src={Usuarios} alt="imagen-scala" />
                            </div>
                        </div>
                    </div>
                </div>

                {/*Requisitos*/}
                <div className='conatiner-fluid requisitosContainer'>
                    <div className='requisitosContent'>
                        <h1 className='tituloRequisitos'>

                        </h1>
                        <div className='requisitos'>
                            <div cla>

                            </div>

                        </div>
                    </div>
                </div>

                {/*Boton de contacto*/}
                <div className='container-fluid d-flex contactoContainer mt-5 p-0'>

                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 cuboUno d-flex flex-column justify-content-center align-content-center'>
                        <img className='imgMensajeUno d-block d-md-none d-lg-none d-xl-none d-xxl-none' src={Mensaje} alt="" />
                        <h1 className='tituloContacto'>
                            Contáctanos
                        </h1>
                        <p className='contactoParrafo'>Para más información sobre cotización, precio, soporte y SCALA administrativo debe hacer click
                            en el siguiente <span>botón</span> que se muestra a continuación.</p>
                        <span className='comenzarSpan'><Link className='comenzarLink' to="/about">Comenzar</Link></span>
                    </div>
                    <div className='col-6 d-none d-md-flex d-lg-flex d-xl-flex cuboDos justify-content-center align-content-center'>
                        <img className='imgMensajeDos' data-aos='flip-up' data-aos-duration='1300' src={Mensaje} alt="icono-mensaje" />
                    </div>


                </div>

            </div>
            
        </div>


    );

}

export default Home;