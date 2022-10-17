import React from 'react'
import Menu from '../components/menu';
import {AiOutlineArrowDown as Flecha} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const princing = () => {
  return (
    <div>
      <Menu></Menu>

      <div className='container-fluid d-flex justify-content-center align-items-center mt-5 pt-4 containerPlanes'>
        <div className='container d-flex justify-content-center align-items-center pt-1 pb-3 planes flex-wrap'>

          <div className='col-12 pt-2 d-flex justify-content-center'>
            <h1 className='tituloPlanes'>Nuestros Planes</h1>
          </div>
          <div className='planesContent d-flex justify-content-center align-items-center flex-wrap col-12'>
            {/*Plan 1*/}
            <div className='tarjetasPlanes p-4 m-2'>
              <div className='col-12  tituloPlan d-flex flex-column justify-content-center align-content-center'>
                <h5>Plan Standard</h5>
                <p>La solución ideal para empresas pequeñas</p>
                <h2>320$</h2>
                <div className='containerBotonContactar pb-2'>
                  <Link to='/about'><button className='botonContactar'>Contactar</button></Link>
                </div>
              <p><Flecha className='flechaPlanes'/></p>
              <p className='mt-1 tituloSkill'>Características principales</p>
              </div>
              <ul className='mt-2'>
                <li>Instalación en un Equipo</li>
                <li>Formato de Factura Libre (1)</li>
              </ul>
            </div>
            {/*Plan 2*/}
            <div className='tarjetasPlanes p-4 m-2'>
              <div className='col-12  tituloPlan d-flex flex-column justify-content-center'>
                <h5>Plan Avanzado</h5>
                <p>El paquete perfecto para emprendedores</p>
                <h2 className='PrecioStandar'>470$</h2>
                <div className='containerBotonContactar pb-2'>
                  <Link to='/about'><button className='botonContactar emprendedor'>Contactar</button></Link>
                </div>
                <p>
                <Flecha className='flechaPlanes'/>
                </p>
              <p className='mt-1 tituloSkill emprendedorCaract'>Características principales</p>
              </div>
              <ul className='mt-2'>
                <li>Instalación en 5+</li>
                <li>Formato de Factura Libre (2)</li>
                <li>Soporte por 1 mes</li>
              </ul>
            </div>
            {/*Plan 3*/}
            <div className='tarjetasPlanes p-4 m-2'>
              <div className='col-12  tituloPlan d-flex flex-column justify-content-center'>
                <h5>Plan Empresarial</h5>
                <p>Optimizado para negocios medianos y grandes
                  Empresas</p>
                <h2>680$</h2>
                
                <div className='containerBotonContactar pb-2'>
                <Link to="/about"><button className='botonContactar'>Contactar</button></Link>
                </div>
                <p><Flecha className='flechaPlanes'/></p>
              <p className='mt-1 tituloSkill'>Características principales</p>
              </div>
              <ul className='mt-2'>
                <li>Instalación en 20+ Equipos</li>
                <li>Instalación y asistencia en remoto</li>
                <li>Formato de Factura Libre (3)</li>
                <li>Soporte por 1 mes</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default princing