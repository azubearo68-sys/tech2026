import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  //Leemos cantidad de productos en carrito para mostrar
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  //Accedemos al nodo donde vamos a mostrar las tarjetas de producto
  const contenedor = document.getElementById("contenedor-carrito");

  // Botones de acciones
  const divAcciones = document.getElementById("acciones-carrito");

  //Esta lineas limpian los contenedor antes de renderizar tarjetas y botones
  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";

  //Sino hay productos en el carrito
  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "Tu carrito esta vacio ";
    contenedor.appendChild(mensaje);
    return;
  }
  const btnPagar = document.createElement("button");

btnPagar.classList.add("btn");

btnPagar.textContent = "Pagar";

btnPagar.addEventListener("click", () => {
  alert("¡Gracias por tu compra!");
  vaciarCarrito();
  renderizarCarrito();
});



  //Si hay productos en el carrito
  carrito.forEach((producto, index) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("planta");

    const img = document.createElement("img");

  
    img.src = `../${producto.img}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-eliminar-carrito");
    btnEliminar.textContent = "Eliminar producto";

    btnEliminar.addEventListener("click", () => {
      eliminarProducto(index);
      renderizarCarrito();
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnEliminar);

    contenedor.appendChild(tarjeta);
  });

  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn", "btn-vaciar-carrito");
  btnVaciar.textContent = "Vaciar carrito";

  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  divAcciones.appendChild(btnVaciar);
  divAcciones.appendChild(btnPagar);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});