import React, {useContext}from 'react'
import {Link, Outlet} from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
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
            <ul className="nav-new">
            <li ><Link  className="navbar-brand logo"  to='/'>URBANO </Link></li>
            <li className='li-pro'> <Link className="navbar-brand item-productos"  to='/producto'>Productos</Link></li>
            <li className='li-pro'> <Link className="navbar-brand item-productos"  to='/nosotros'>Nosotros</Link></li>
          
            <li className='li-pro'>   <Link className="navbar-brand item-productos"  to='/ofertas'>Ofertas <FcApproval style={{color: 'white', fontSize: '20px'}}/></Link></li>
            <li className='li-pro'> <Link className="navbar-brand item-productos"  to='/contactenos'>Contactenos</Link></li>
            <li style={{ float: 'right', paddingRight: '25px' }}><Link to="/Carrito">
            <div className="cart">
            <FaCartPlus style={{color: 'white', fontSize: '25px'}}/>
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
