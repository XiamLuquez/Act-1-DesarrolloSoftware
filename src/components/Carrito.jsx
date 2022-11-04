import React, { useContext } from "react";
import { ContenedorProd } from "../context/DataProvider";
import {Link} from 'react-router-dom'

const Carrito = () => {
  const propCarrito = useContext(ContenedorProd); //optener parametros del contrexto
  const [carritoCompra, setCarritoCompra] = propCarrito.carritoCompra; //
  const [total] = propCarrito.total;

  //Elimina producto del carrito
  const EliminarProducto = (id) => {
    if (window.confirm("Quieres Quitar este Producto del Carrito?")) {
      carritoCompra.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carritoCompra.splice(index, 1);
        }
      });

      setCarritoCompra([...carritoCompra]);
    }
  };

  //Dosminuir cantidad de produto
  const RedProd = (id) => {
    carritoCompra.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarritoCompra([...carritoCompra]);
    });
  };

  //Aumentar cantidad de produto
  const AumProd = (id) => {
    carritoCompra.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarritoCompra([...carritoCompra]);
    });
  };

  return (
    <div>
      <div className="container padding-ar-ab">
        <div className="row mt-3">
          <div className="columna">
            <h2 className="titulo-header ti-carrito">Realizar Compra</h2>
            <form id="procesar-pago" action="#" method="post">
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="cliente"
                    placeholder="Ingresa nombre cliente"
                    name="destinatario"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="correo"
                    placeholder="Ingresa tu correo"
                    name="cc_to"
                  />
                </div>
              </div>
            </form>
            <div id="carrito" className="table-responsive">
              <table className="table" id="lista-compra">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Sub Total</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {carritoCompra.map(
                    ({ id, image, title, price, cantidad }) => (
                      <tr key={id}>
                        <td>
                          <figure>
                            <img src={image} alt={title} />
                          </figure>
                        </td>
                        <td>{title}</td>
                        <td>$ {price}</td>
                        <td>
                          <div className="item-cantidad">
                            <button type="button" onClick={() => RedProd(id)}>
                              -
                            </button>
                            <p style={{ paddingLeft: "10px" }}>{cantidad}</p>
                            <button onClick={() => AumProd(id)} type="button">
                              +
                            </button>
                          </div>
                        </td>
                        <td>$ {price * cantidad}</td>
                        <td>
                          <button
                            onClick={() => {
                              EliminarProducto(id);
                            }}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    )
                  )}{" "}
                </tbody>

                <section>
                  <div colSpan="4" scope="col" className="text-right total">
                    TOTAL :
                  </div>
                  <div scope="col" className="ti-precio">
                    <p>$ {total}</p>
                  </div>
                </section>
              </table>
              <div className="botonesCarrito">
              <Link className="navbar-brand"  to='/producto'>
                <button href="#" className="boton1" id="procesar-compra">
                  Seguir comprando
                </button>
                </Link>
                <button href="#" className="boton2" id="procesar-compra">
                  Realizar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
