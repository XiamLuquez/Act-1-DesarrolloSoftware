import { createContext } from "react";
import dataProductos from "../Datos";
import { useState, useEffect } from "react";

export const ContenedorProd = createContext(); // nombre contexto que almacena datos
export function ContenedorProdProvider(props) {
  // comoponente que engloba otros componentes

  const [productos, setProductos] = useState([]);
  const [carritoCompra, setCarritoCompra] = useState(() => {
    const datCarrito = localStorage.getItem("dataCar"); //obtener información del localStorage y guardarla en carritoCompra
    let dataCarrito;
     //preguntamos si existe el localStorage
    if (datCarrito) {
       dataCarrito = JSON.parse(datCarrito);
    }else{
       dataCarrito = [];
    }
  
    return dataCarrito;
  });
  const [total, setTotal] = useState(0);

  //Cargar productos 
  useEffect(() => {
    const productos = dataProductos.items;
    if (productos) {
      setProductos(productos);
    } else {
      setProductos([]);
    }
  }, []);

  //agregar Procucto al Carrito

  const addCarritoCompra = (id) => {
    const veriProd = carritoCompra.every((item) => {
      return item.id !== id; // preguntamos si se cumple la condicion
    });
    if (veriProd) {
      const Prod = productos.filter((productos) => {
        return productos.id === id; // buscamos el producto en la lista de productos
      });
    

      setCarritoCompra([...carritoCompra, ...Prod]);
    } else {
      alert("El producto ya esta agregado al Carrito de Compras");
    }
  };

  //Actualizar Total
  useEffect(() => {
    const getTotal = () => {
      const tot = carritoCompra.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      setTotal(tot);
    };
    getTotal();
  }, [carritoCompra]);

  //guardar en localStorage

  useEffect(() => {
    localStorage.setItem("dataCar", JSON.stringify(carritoCompra));
  }, [carritoCompra]);

  //Guardar variables
  const propCarrito = {
    productos: productos,
    addCarritoCompra: addCarritoCompra,
    carritoCompra: [carritoCompra, setCarritoCompra],
    total: [total, setTotal],
  };

  return (
    <>
      <ContenedorProd.Provider value={propCarrito}>
        {props.children}{" "}
      </ContenedorProd.Provider>
    </>
  );
}