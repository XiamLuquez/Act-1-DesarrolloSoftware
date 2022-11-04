import { ContenedorProd } from "../context/DataProvider";
import React, { useContext } from "react";

const Ofertas = () => {
    const { productos, addCarritoCompra } = useContext(ContenedorProd);
    let prodOfertas = productos.filter(productos => productos.price <= 150000);
    return (
  <div className="padding-ar-ab">  
      <div className="container-productos container" id="lista-productos">
        <div className="titulo-header">
        <h1>Ofertas del Día</h1>
      </div>
        
        <div className="list-productos row">

                 
        {prodOfertas.map((prod, i) => (
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
    </div>
  </div>
        
     
      );
}

export default Ofertas