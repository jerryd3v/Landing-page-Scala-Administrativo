import React from "react";
import Menu from "../components/menu";

//Recursos
import Call from "../images/call.png";
import CallMobile from "../images/callMobile.png";
import {
  AiFillEnvironment as Ubicacion,
  AiFillMail as Correo,
  AiFillInstagram as Insta,
  AiFillYoutube as Youtube,
  AiFillMobile as Mobile,
  AiOutlineUser as Redes,
} from "react-icons/ai";
import {
  BsFillTelephoneOutboundFill as Phone,
  BsFillTelephoneFill as LocalPhone,
} from "react-icons/bs";

const about = () => {
  return (
    <div>
      <Menu></Menu>

      <div className="container-fluid d-flex justify-content-center align-items-center contactanosContainer pt-5 mt-5 flex-wrap">
        {/*Img Desktop*/}
        <div className=" col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-end cuadroImgDesktop">
          <div className="circuloImgBlanco d-flex align-items-end">
            <img className="imgDesktop" src={Call} alt="" />
          </div>
        </div>
        {/*Img Mobile*/}
        <div className="d-flex col-12 d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none justify-content-center align-items-center cuadroImgMobile pb-4 mb-4">
          <div className="circuloImgBlancoMobile d-flex justify-content-center align-items-center">
            <img className="imgMobile" src={CallMobile} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  d-flex justify-content-center align-items-center flex-wrap containerTarjeta">
          <div className="tarjetaContac m-2">
            <Ubicacion
              size={"2em"}
              color={"#FF7B00"}
              className="iconContactanos"
            ></Ubicacion>
            <h5>Ubicación</h5>
            <p>
              Centro Comercial San Ignacio, Sector Hollywood, Nivel Jardín,
              Local H-123. Municipio Chacao, Estado Miranda, Venezuela.
            </p>
            {/* <p>Av Andres Bello edif. Centro Andres Bello Torre Este piso PH, Caracas, Venezuela.</p> */}
          </div>
          <div className="tarjetaContac m-2">
            <Correo
              size={"2em"}
              color={"#FF7B00"}
              className="iconContactanos"
            ></Correo>
            <h5>Correo</h5>
            <p id="correoText">admon.saint@gmail.com</p>
          </div>
          <div className="tarjetaContac m-2">
            <Redes
              size={"2.3em"}
              color={"#FF7B00"}
              className="iconContactanos"
            ></Redes>
            <h5>Redes</h5>
            <ul className="listaRedes">
              <li>
                <Insta
                  size={"1.2em"}
                  color={"#FF7B00"}
                  className="iconContactanos"
                ></Insta>
                <a
                  className="linkRedes"
                  href="https://www.instagram.com/csi.sistemas/?hl=es-la"
                >
                  @csi.sistemas
                </a>
              </li>

              <li>
                <Youtube
                  size={"1.2em"}
                  color={"#FF7B00"}
                  className="iconContactanos"
                ></Youtube>
                <a
                  className="linkRedes"
                  href="https://www.youtube.com/channel/UCF-ntNi3akbt00DbnAR2w6w"
                >
                  YouTube
                </a>
              </li>

              {/* <li><Twitter size={'1.2em'} color={'#FF7B00'} className="iconContactanos"></Twitter><a className="linkRedes" href="https://www.instagram.com/csi.sistemas/">Twitter</a></li>

              <li><Facebook size={'1.2em'} color={'#FF7B00'} className="iconContactanos"></Facebook><a className="linkRedes" href="https://www.instagram.com/csi.sistemas/">Facebook</a></li> */}
            </ul>
          </div>
          <div className="tarjetaContac m-2">
            <Phone
              size={"2em"}
              color={"#FF7B00"}
              className="iconContactanos"
            ></Phone>
            <h5>Teléfonos</h5>
            <p className="telefonoTarjeta">
              <Mobile size={"1.4em"} color={"#FF7B00"} /> 0414.326.2032
            </p>
            {/* <p className="telefonoTarjeta"><Mobile size={'1.4em'} color={'#FF7B00'}/> 0424.267.61.98</p> */}
            <p className="telefonoTarjeta">
              <LocalPhone size={"1.4em"} color={"#FF7B00"} /> 0212.793.6013
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
