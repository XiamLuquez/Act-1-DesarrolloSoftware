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
            <nav className="navbar ">

                <Link className="navbar-brand"  to='/'>TIENDA Y ACCESORIOS UNIR</Link>{' '}
                <Link className="navbar-brand"  to='/producto'>PRODUCTOS</Link>
                <Link to="/Carrito">
                <div className="cart">
                <FaCartPlus style={{color: 'white', fontSize: '25px'}}/>
                <span className="item_total">{carritoCompra.length}</span>
                 </div>
                 </Link>
            </nav>
            <section>
               <Outlet />
            </section>
        </main>
        </div>
        </div>
        </header>
    
    )
}

export default Layout
