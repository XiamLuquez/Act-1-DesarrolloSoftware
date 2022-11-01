import React from 'react'
import {useState} from 'react'

const Carrito = () => {
    const [carritoCompra, setCarritoCompra] = useState([]);
    const [productos, setProductos] = useState([])

    const addCarritoCompra = (id) => {
        const veriProd = carritoCompra.every(item => {
            return item.id !== id; // preguntamos si se cumple la condicion

        })
        if (veriProd) {
            const Prod = productos.filter(productos => {
                return productos.id === id; // buscamos el producto en la lista de productos
            })

            setCarritoCompra([
                ...carritoCompra,
                ... Prod
            ]);
        } else {
            alert("El producto a esta agreagdo al Carrito");
        }
    }

    console.log(addCarritoCompra);

    return [addCarritoCompra]


}

export default Carrito