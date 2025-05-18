import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await obtenerProductos();
    setProductos(data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Productos</h2>
      <ul className="space-y-2">
        {productos.map((producto) => (
          <li key={producto.id} className="bg-gray-100 p-3 rounded">
            <h3 className="font-semibold">{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
