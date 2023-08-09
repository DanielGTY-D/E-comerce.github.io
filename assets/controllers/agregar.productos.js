import { services } from "../services/service.cliente.js";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-form="producto"]');
  const categorias = {
    starWars: "",
    consolas: "",
    variados: ""
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const element = e.target;
    validarInputs(element);
  });

  function validarInputs(form) {
    const inputCategoria = form.querySelector("[data-tipo=categoria]").value;
    const inputPrecio = form.querySelector("[data-tipo=precio]").value;
    const inputImg = form.querySelector("[data-tipo=url]").value;
    const inputNombre = form.querySelector("[data-tipo=nombre]").value;

    if (!categorias[inputCategoria]) {
      const { starWars, consolas, variados } = categorias;
      mostrarMensaje(
        `categorias disponibles: ${starWars}, ${consolas}, ${variados}`,
        form
      );
      return;
    }
    if (inputPrecio.value >= 100000) {
      mostrarMensaje("El precio es demasiado elevado", form);
      return;
    }

    services
      .agregarProducto(inputImg, inputNombre, inputPrecio, inputCategoria)
      .then((respuesta) => console.log(respuesta))
      .catch((err) => console.log(err));
  }

  services.peticionProductos().then((datos) => {
    datos.forEach((element) => {
      const { categoria } = element;
      categorias[categoria] = categoria;
    });
  });

  function mostrarMensaje(mensaje, referencia) {
    const err = document.createElement("span");
    err.classList.add("error2");
    err.textContent = mensaje;
    referencia.appendChild(err);

    setTimeout(() => {
      err.remove();
    }, 3500);
  }
});
