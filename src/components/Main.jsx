import React, {useContext} from 'react'
import {ContenedorProd} from '../context/DataProvider';
import ListProductos from './ListProductos';
import {useSearchParams} from 'react-router-dom';

const Main = () => {

    const {productos,addCarritoCompra} = useContext(ContenedorProd);
    const [parametroBusqueda, setPparametroBusqueda] = useSearchParams();
   

    const listProd =productos[0];

    const filtro = parametroBusqueda.get('filtro') ?? '';

    const filtrar =  (e) => {
      setPparametroBusqueda({filtro: e.target.value});
    }
    return (
        <div>
            <div className="titulo-header">
                <h1>Lista de Productos</h1>
                <p className="lead">Encuentra el Producto que estas buscandos</p>
                <input placeholder="Ingresa el Producto Buscar" value={filtro} onChange={filtrar} type="text"></input>
            </div>
 
            <div className="container-productos" id="lista-productos">
                <div className="list-productos">
                {
                    listProd.filter(prod => {
                        if(!filtro) return true;
                        const nombre = prod.title.toLowerCase();
                        return nombre.includes(filtro.toLowerCase())
                    }).map((prod,i) => (
                       
                        <div  className="productos" key={prod.id}>
                        <div className="card-header-productos">
                            <h4 className="nom-productos-header">{prod.title}</h4>
                        </div>
                        <div className="card-body-productos">
                            <img src={prod.image} className="card-img-top"/>
                            <h1 className="precio-titulo">$
                                <span className=""> {prod.price}</span>
                            </h1>
                            <ul className="list-detalles-producto">
                                <li></li>
                                <li>MArca: {prod.category}</li>
                                <li>Envio Gratis</li>
                            </ul>
                                <a onClick={() => addCarritoCompra(prod.id)} className="brn-add-carriot" data-id="4">Agregar al Carrito</a>
                        </div>
                    </div>
                       

                    )) 
                }
             
            
                </div>

            </div>

        </div>
    )
}

export default Main