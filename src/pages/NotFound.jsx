import React from 'react';
import Menu from '../components/menu';
import ImgNotFound from '../images/404.png';

const NotFound = () => {
    return (
        <div>
            <Menu />
            <div className='container-fluid d-flex justify-content-center align-items-center flex-column containerNotFound'>
                <img src={ImgNotFound} alt='imagen de pagina no encontyrada' title='Página No Encontrada' className='imgNotFound'/>
                <h1>404</h1>
                <h3>Página no encontrada...</h3>
            </div>

        </div>
    )
}

export default NotFound