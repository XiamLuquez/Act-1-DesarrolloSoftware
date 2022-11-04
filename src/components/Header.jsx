import React, {useContext}from 'react'
import {Link, Outlet} from 'react-router-dom';
import { FcApproval,FcFeedback, FcConferenceCall,FcPackage,FcPaid } from 'react-icons/fc';
import {ContenedorProd} from '../context/DataProvider';


const Layout = () => {
  const propCarrito = useContext(ContenedorProd);
  const [carritoCompra] = propCarrito.carritoCompra;
  const [total] = propCarrito.total;

  return (
      <header>
      <div className="container-fluid">
      <div className="justify-content-between">
        <main>
            <nav>
            <ul className="nav-new menu-prin">
            <li ><Link  className="navbar-brand logo"  to='/'>URBANO </Link></li>
            <li className='li-pro'> <Link className="navbar-brand item-productos"  to='/producto'><FcPackage style={{ fontSize: '20px'}}/> Productos</Link></li>
            <li className='li-pro'>   <Link className="navbar-brand item-productos"  to='/ofertas'><FcApproval style={{ fontSize: '20px'}}/> Ofertas</Link></li>
            <li className='li-pro'> <Link className="navbar-brand item-productos"  to='/nosotros'><FcConferenceCall style={{ fontSize: '20px'}}/> Nosotros</Link></li>
            <li className='li-pro'> <Link className="navbar-brand item-productos"  to='/contactenos'><FcFeedback style={{ fontSize: '20px'}}/> Contactenos</Link></li>
            <li className='icono-carr' style={{ float: 'right', paddingRight: '25px' }}><Link to="/Carrito">
            <div className="cart">
            <FcPaid style={{color: 'white', fontSize: '35px'}}/>
            <span className="item_total">{carritoCompra.length}</span>
            <label > {'$ '+ total}</label>
            
             </div>
             </Link></li>
           
          </ul>
            </nav>
            <section>
               <Outlet /> {/* Establece espacio donde renderizamos el resultdo de las rutas  */}
            </section>
            
        </main>
        </div>
        </div>
      
        </header>
    
    )
}

export default Layout
