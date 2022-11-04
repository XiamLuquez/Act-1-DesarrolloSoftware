import React from 'react';
import Info1 from '../images/info1.jpg';
import Info2 from '../images/info2.jpg';
import Info3 from '../images/info3.jpg';
import Info4 from '../images/info4.jpg';

const Footer = () => {
    return (
    <footer>
            <section className='cont-info'>
        <div className="container">
          <div className='row'>
            <div className="info col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={Info1} alt="" className='img-info'/>
            </div>
            <div className="info col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={Info2} alt="" className='img-info'/>
            </div>
            <div className="info col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={Info3} alt="" className='img-info'/>
            </div>
            <div className="info col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={Info4} alt="" className='img-info'/>
            </div>
          </div>
        </div>
      </section>
      <section className='copy'>
        <div>
          <span>
            © 2022 por Estudiantes UNIR. Creado orgullosamente con REACT
          </span>
        </div>
      </section>
    </footer>
    

    )
}
export default Footer