import { ContenedorProd } from "../context/DataProvider";
import React, { useContext } from "react";

const ListProductos = ({ filtro }) => {
  const { productos, addCarritoCompra } = useContext(ContenedorProd);

  return (
    <div className="list-productos row">
        
    {productos
      .filter((prod) => {
        if (!filtro) return true;
        const nombre = prod.title.toLowerCase();
        return nombre.includes(filtro.toLowerCase());
      })
      .map((prod, i) => (
        <div className="productos col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" key={prod.id}>
          <div className="card-body-productos">
            <img src={prod.image} className="card-img-top" />
            <div className="card-header-productos">
            <h4 className="nom-productos-header">{prod.title}</h4>
          </div>
            <h1 className="precio-titulo">
              $<span className=""> {prod.price}</span>
            </h1>
            <ul className="list-detalles-producto">
              <li></li>
              <li>MArca: {prod.category}</li>
              <li>Envio Gratis</li>
            </ul>
            <a
              onClick={() => addCarritoCompra(prod.id)}
              className="brn-add-carriot"
              data-id="4"
            >
              Agregar al Carrito
            </a>
          </div>
        </div>
      ))}
  </div>
  );
};

export default ListProductos;
