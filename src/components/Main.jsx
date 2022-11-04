import React from "react";
import ListProductos from "./ListProductos";
import { useSearchParams } from "react-router-dom";



const Main = () => {
    const [parametroBusqueda, setPparametroBusqueda] = useSearchParams();

  //hook que me permite obtener el string(busqueda) de la URL
  const filtro = parametroBusqueda.get("filtro") ?? "";
  //Funcion para enviar texto del input al url
  const filtrar = (e) => {
    setPparametroBusqueda({ filtro: e.target.value });
  };

  return (
    <div className="padding-ar-ab">
      <div className="titulo-header">
        <h1>Lista de Productos</h1>
        <p className="lead">Encuentra el Producto que estas buscando
        </p>
        <input
          placeholder="Ingresa el Producto Buscar"
          value={filtro}
          onChange={filtrar}
          type="text"
        ></input>
      </div>

      <div className="container-productos container" id="lista-productos">
      <ListProductos filtro={filtro} />
      </div>
    </div>

  );
};

export default Main;
