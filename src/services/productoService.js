import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/productos";

export const obtenerProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearProducto = async (producto) => {
  const response = await axios.post(API_URL, producto);
  return response.data;
};
