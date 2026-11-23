export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length || "";
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};export const crearTarjeta = (producto) => {
  return `
    <article class="planta">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">Cada una $${producto.precio}</p>
      <button
        class="btn bg secondary text-dark agregar-carrito"
        data-id="${producto.id}">
        Agregar
      </button>
    </article>
  `;
};