import React, {useContext}from 'react'
import {Link, Outlet} from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import {ContenedorProd} from '../context/DataProvider';


const Layout = () => {
  const propCarrito = useContext(ContenedorProd);
  const [carritoCompra] = propCarrito.carritoCompra;

  return (
      <header>
      <div className="container">
      <div className="justify-content-between">
        <main>
            <nav>
            <ul className="nav-new">
            <li ><Link  className="navbar-brand"  to='/'>TIENDA Y ACCESORIOS UNIR </Link></li>
            <li> <Link className="navbar-brand"  to='/producto'>PRODUCTOS</Link></li>
            <li style={{ float: 'right', paddingRight: '25px' }}><Link to="/Carrito">
            <div className="cart">
            <FaCartPlus style={{color: 'white', fontSize: '25px'}}/>
            <span className="item_total">{carritoCompra.length}</span>
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
