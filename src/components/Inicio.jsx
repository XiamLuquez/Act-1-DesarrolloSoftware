import React from 'react';
import Portada from '../images/banner.PNG';
import Mujer from '../images/mujer.jpg';
import Hombre from '../images/hombre.jpg';
import Nino from '../images/nino.jpg';
import {Link, Outlet} from 'react-router-dom';

const Inicio = () => {
  return (
     <main className='inicio'>
      <section>
        <div className="bannerini">
          <img src={Portada} alt="" className='banner'/>
        </div>
        <div className="titulo">
          <h1>Descubre nuestros productos</h1>
        </div>
      </section> 
      <section className='container'>
        <div className="categorias row">
          <div className="mujeres col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <Link to='/producto'>
              <img src={Mujer} alt="" className='img-mujer categoria'/>
              <div className='ti-categoria'>
                <h2>Moda Mujer</h2>
              </div>
            </Link> 
          </div>
          <div className="hombres col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <Link to='/producto'>
              <img src={Hombre} alt="" className='img-hombre categoria'/>
              <div className='ti-categoria'>
                <h2>Moda Hombre</h2>
              </div>
            </Link>
          </div>
          <div className="ninos col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <Link to='/producto'>
              <img src={Nino} alt="" className='img-nino categoria'/>
              <div className='ti-categoria'>
                <h2>Moda Niño</h2>
              </div>
            </Link>
          </div>
          <div>
               <Outlet /> {/* Establece espacio donde renderizamos el resultdo de las rutas  */}
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default Inicio