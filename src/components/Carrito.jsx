import React, {useContext} from 'react'
import {ContenedorProd} from '../context/DataProvider';


const Carrito = () => {

    const propCarrito = useContext(ContenedorProd);
    const [carritoCompra, setCarritoCompra] = propCarrito.carritoCompra;
    const [total] = propCarrito.total;

    const EliminarProducto = id => {

        if (window.confirm('Quieres Quitar este Producto del Carrito?')) {
            carritoCompra.forEach((item, index) => {

                if (item.id === id) {
                    item.cantidad = 1;
                    carritoCompra.splice(index, 1);
                }

            })


            setCarritoCompra([...carritoCompra]);
        }
    }


    const delItem = id => {
        carritoCompra.forEach(item => {

            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;

            }
            setCarritoCompra([...carritoCompra]);

        })
    }

    const addItem = id => {

        carritoCompra.forEach(item => {

            if (item.id === id) {
                item.cantidad += 1;

            }
            setCarritoCompra([...carritoCompra]);

        })
    }


    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="columna">
                        <h2 className="titulo-header">Realizar Compra</h2>
                        <form id="procesar-pago" action="#" method="post">
                            <div className="form-group">
                                <div>
                                    <input type="text" className="form-control" id="cliente" placeholder="Ingresa nombre cliente" name="destinatario"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input type="text" className="form-control" id="correo" placeholder="Ingresa tu correo" name="cc_to"/>
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
                                <tbody> {
                                    carritoCompra.map(({
                                        id,
                                        image,
                                        title,
                                        price,
                                        cantidad
                                    }) => <tr key={id}>
                                        <td>
                                            <figure>
                                                <img src={image}
                                                    alt={title}/>
                                            </figure>
                                        </td>
                                        <td>{title}</td>
                                        <td>$ {price}</td>
                                        <td>
                                            <div className="item-cantidad">
                                                <button type="button"
                                                    onClick={
                                                        () => delItem(id)
                                                }>-</button>
                                                <p style={
                                                    {paddingLeft: '10px'}
                                                }>
                                                    {cantidad}</p>
                                                <button onClick={
                                                        () => addItem(id)
                                                    }
                                                    type="button">+</button>
                                            </div>
                                        </td>
                                        <td>$ {
                                            price * cantidad
                                        }</td>
                                        <td>
                                            <button onClick={
                                                () => {
                                                    EliminarProducto(id)
                                                }
                                            }>Eliminar</button>
                                        </td>
                                    </tr>)
                                } </tbody>

                                <tr>
                                    <th colSpan="4" scope="col" className="text-right">TOTAL :</th>
                                    <th scope="col">
                                        <p>$ {total}</p>
                                    </th>

                                </tr>

                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito