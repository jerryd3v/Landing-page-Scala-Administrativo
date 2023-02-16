import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom';

const menu = () => {
    return (
        <div className='containerLogo d-flex'>
            <div className='col-12 d-flex justify-content-end'>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-logo" href="https://www.sistemasrjd.com"> <img className="logo" src={Logo}
                            alt="logo" title='Sistemas RJD' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            
                            <ul className="navbar-nav ms-auto">
                                <li className='nav-item volver'>
                                    <Link className='nav-link active' to="/">Inicio</Link>
                                </li>
                                <li className="nav-item volver">
                                    <a className="nav-link active " aria-current="page" href="https://www.sistemasrjd.com">

                                        Tienda
                                    </a>
                                </li>
                                <li className='nav-item volver'>
                                    <Link className='nav-link active' to="/pricing">Planes</Link>
                                </li>
                                <li className='nav-item volver'>
                                    <Link className='nav-link active' to="/developer">Desarrollo</Link>
                                </li>
                                <li className='nav-item volver'>
                                    <Link className='nav-link active' to="/about">Contáctanos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default menu