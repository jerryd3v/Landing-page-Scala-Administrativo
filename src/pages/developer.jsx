import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//Componentes
import Menu from "../components/menu";
//Recursos de las tarjetas
// import Logo from "../images/logo.png";
import Pagina from "../images/pagina.png";
import Android from "../images/android.png";
import IA from "../images/ia.png";
import tiendaOnline from "../images/tiendaOnline.png";
// recursos de contactanos
import Mensaje from "../images/mensaje.png";
import axios from "axios";
//recursos del apartado de desarrollo
import ImgDesarrollo from "../images/desarrollo.png";
//recursos del apartado de SEO
import ADS from "../images/ads.png";
import GoogleADS from "../images/googleAds.png";
import Analytics from "../images/analytics.png";
import AnalyticsSEO from "../images/analyticsSeo.png";
import SearchEngine from "../images/search.png";

function Developer() {
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

    if (!localStorage.getItem("ip") && !localStorage.getItem("geoIP")) {
      const rest = () => {
        axios.get("https://api.ipify.org?format=json").then((res) => {
          if (res.data.ip === "null") {
            console.log("Ip is null");
          } else {
            localStorage.setItem("ip", res.data.ip);
          }
        });
      };
      rest();
    }
  }, []);
  let IP = localStorage.getItem("ip");

  axios.get(`https://ipwho.is/${IP}`).then((res) => {
    localStorage.setItem("geoIP", JSON.stringify(res.data));
  });
  let address = localStorage.getItem("geoIP");
  let pais = JSON.parse(localStorage.getItem("geoIP"));

  const insertarDatos = () => {
    axios
      .post("https://www.compuhightech.com/wp/CRUD/peticiones.php", {
        peticion: "GUARDAR",
        ip: IP,
        pais: pais.country,
        estado: pais.region,
        datos: address,
        visitas: 1,
        registro: pais.timezone.current_time,
      })

      // axios.post('http://localhost/CRUD/peticiones.php', {'peticion': 'GUARDAR', 'ip' : IP, 'pais' : pais.country , 'estado' : pais.region, 'datos' : address, 'visitas': 1, 'registro' : pais.timezone.current_time})
      .then((res) => {
        if (res.status === 200) {
          console.log(`${res.data}`);
        }
      });
  };
  // JSON.parse(localStorage.getItem('geoIP'))

  let ipExistente = JSON.parse(localStorage.getItem("geoIP"));

  if (ipExistente.ip === "null") {
    console.log("La IP es nula");
  } else {
    insertarDatos();
    console.log("datos enviados");
  }

  return (
    <div>
      <div className="container-fluid headerDesarrollo">
        <Menu />
        <div className="containerEsloganM d-flex flex-wrap-reverse mt-0 mt-lg-5 mt-xl-5 mt-xxl-5 pt-5 justify-content-center align-items-center">
          
          <div className="esloganD ps-5 col-12 col-md-12 col-lg-4 col-4 d-none d-lg-flex d-xl-flex d-xxl-flex flex-column  justify-content-center ">
            <h1 className="tituloDesarrollo">Diseño y</h1>
            <h1 className="tituloDesarrollo"> Desarrollo Web</h1>
            <p className="parrafoTituloDesarrollo">
              Diseño y desarrollo de páginas web. Múltiples servicios de
              markting digital, SEO y redes sociales que darán visibilidad a tu
              negocio o proyecto en internet.
            </p>
          </div>

          <div className="esloganDM ps-2 col-md-12 col-12 col-sm-12 col-lg-8 col-8 d-flex d-lg-none d-xl-none d-xxl-none d-flex flex-column  justify-content-center ">
            <h1 className="tituloDesarrolloM">Diseño y</h1>
            <h1 className="tituloDesarrolloM"> Desarrollo Web</h1>
            <p className="parrafoTituloDesarrolloM pt-4">
              Diseño y desarrollo de páginas web. Múltiples servicios de
              markting digital, SEO y redes sociales que darán visibilidad a tu
              negocio o proyecto en internet.
            </p>
          </div>

          <div className=" imgContainerD col-md-6 col-lg-8 col-8 d-none d-md-none d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center">
            <img
              className="imgDesarrollo"
              src={ImgDesarrollo}
              alt="Desarrollo Web"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid main pt-5 pb-5">
        
        {/*Tarjetas*/}

        <div className="container-fluid pt-5 pb-5 containerTarjetas d-flex justify-content-center flex-column">
          <div className=" col-12 tituloTarjetas">
            <h1 className="tituloText">
              Además, ofrecemos Múltiples servicios en el mundo del <br />
              desarrollo
            </h1>
            <p className="parrafoText">Creamos Soluciones para tu empresa</p>
          </div>
          <div className="tarjetas container-fluid col-12 col-sm-10 col-lg-10 p-1 pb-4 d-flex justify-content-center flex-wrap">
            <div className="col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div
                className="tarjeta m-1"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <img
                  className="iconTarjeta"
                  src={Pagina}
                  alt="inventario-icon"
                />
                <h5 className="tituloTarjeta">Desarrollo Web</h5>
                <p>
                  Posiciona tu empresa con una página web fácil de acceder y
                  gestionar.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div
                className="tarjeta m-1"
                data-aos="zoom-out"
                data-aos-delay="500"
              >
                <img
                  className="iconTarjeta"
                  src={Android}
                  alt="inventario-icon"
                />
                <h5 className="tituloTarjeta">Desarrollo Android</h5>
                <p>
                  Ponemos en tu mano la posibilidad de tener tu aplicación
                  Android hecha a media.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div
                className="tarjeta m-1"
                data-aos="zoom-out"
                data-aos-delay="600"
              >
                <img className="iconTarjeta" src={IA} alt="inventario-icon" />
                <h5 className="tituloTarjeta">Automatización de Procesos</h5>
                <p>
                  Automatiza tareas o procesos constantes que requieran mucho
                  tiempo de tu personal.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div
                className="tarjeta m-1"
                data-aos="zoom-out"
                data-aos-delay="700"
              >
                <img
                  className="iconTarjeta"
                  src={tiendaOnline}
                  alt="inventario-icon"
                />
                <h5 className="tituloTarjeta">E-comerce</h5>
                <p>
                  Impulsa tu negocio con una tienda online, donde tus clientes
                  sean capaces de realizar pedidos en línea, realizar pagos,
                  consultar productos y mucho más.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SEO */}

        <div className="container-fluid pt-5 pb-5 seo d-flex justify-content-center flex-wrap">

          <div className="col-12 col-lg-9 col-xl-9 col-xxl-9 pb-5 seoBox d-flex flex-wrap pt-5 pb-5 mt-5">

            <div className="col-4 seoBoxText p-4">
              <img className="iconSeo mb-3" src={ADS} alt="ads-icon" title="Google ADS" />
              <h1 className="seoTitulo">Posicionamos tu marca con Google Ads</h1>
              <p className="textSeo">
              Probablemente te ha pasado que, al hacer una  búsqueda en Google, 
              has encontrado algunos links que se destacan en el resultado.
              Incluso, al ver un vídeo en YouTube, han aparecido algunos anuncios antes o durante los vídeos,
              eso es gracias a <strong>Google Ads</strong>.
              </p>
            </div>

            <div className="col-8 d-flex justify-content-center seoBoxImg">
              <img className="googleAds" src={GoogleADS} alt="ads-Img" title="Google ADS" />
            </div>

          </div>


          <div className="col-12 col-lg-9 col-xl-9 col-xxl-9 pt-5 seoBox d-flex flex-wrap pt-5 pb-5 mt-5">

            <div className="col-4 seoBoxText p-4">
              <img className="iconSeo-2 mb-3" src={Analytics} alt="analytics-icon" title="Google Analytics" />
              <h1 className="seoTitulo">Estadísticas precisas de tu página Web con Google Analytics</h1>
              <p className="textSeo">
              Google Analytics es la herramienta de análisis y seguimiento de sitios web más utilizada
              en el mundo. Se integra con otros servicios de Google, como Ads y Search Console. Con él es posible monitorear el perfil de quienes acceden a tu sitio web, páginas más visitadas, conversiones, dispositivos, ciudades y otros datos.
              </p>
            </div>

            <div className="col-8 d-flex justify-content-center seoBoxImg">
              <img className="googleAds" src={AnalyticsSEO} alt="analytics-img" title="Google Analytics" />
            </div>

          </div>

        </div>
        {/*Wave*/}
        <div className="container-fluid p-0 wave">
          <div
            className="col-12"
            style={{ height: "150px", overflow: "hidden" }}
          >
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: "#009BD2" }}
              ></path>
            </svg>
          </div>
          {/* Fluidez */}
        </div>
        <div className="container-fluid informacion  p-4 d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-light text-break mt-5 liquidez">
            Mantén una liquidez constante en tu negocio . . .
          </h1>
          
          <img className="imgSearch mt-5 pb-5" src={SearchEngine} alt="search-img" title="Search Engine" />
          
        </div>

        {/*Boton de contacto*/}
        <div className="container-fluid d-flex contactoContainerDev m-0 pt-0">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 cuboUno d-flex flex-column justify-content-center align-content-center">
            <img
              className="imgMensajeUno d-block d-md-none d-lg-none d-xl-none d-xxl-none"
              src={Mensaje}
              alt=""
            />
            <h1 className="tituloContacto">Contáctanos</h1>
            <p className="contactoParrafo">
              Para más información sobre cotización, precio, soporte y
              desarrollo a medida debe hacer click en el siguiente{" "}
              <span>botón</span> que se muestra a continuación.
            </p>
            <span className="comenzarSpan">
              <Link className="comenzarLink" to="/about">
                Comenzar
              </Link>
            </span>
          </div>
          <div className="col-6 d-none d-md-flex d-lg-flex d-xl-flex cuboDos justify-content-center align-content-center">
            <img
              className="imgMensajeDos"
              data-aos="flip-up"
              data-aos-duration="1300"
              src={Mensaje}
              alt="icono-mensaje"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
