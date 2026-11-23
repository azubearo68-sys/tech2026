export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch("./data/producto.json");
    return await respuesta.json();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    return [];
  }
};