import React, { useState } from "react";
import { crearProducto } from "../services/productoService";

const ProductoForm = ({ onProductCreated }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();
    await crearProducto({ nombre, precio, descripcion });
    onProductCreated();
    setNombre("");
    setPrecio("");
    setDescripcion("");
  };

  return (
    <form className="p-4 bg-white shadow rounded mb-4" onSubmit={manejarEnvio}>
      <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        className="border p-2 mb-2 w-full"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        className="border p-2 mb-2 w-full"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        className="border p-2 mb-2 w-full"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductoForm;
