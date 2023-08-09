const peticionProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
const peticionClientes = () =>
  fetch("  http://localhost:3000/usuarios").then((respuesta) =>
    respuesta.json()
  );

const borrarProducto = (id) =>
  fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE"
  }).then((respuesta) => respuesta.json());

const agregarProducto = (img, nombre, precio, categoria) =>
  fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      id: uuid.v4(),
      img: img,
      nombre: nombre,
      precio: precio,
      categoria: categoria
    })
  }).then((respuesta) => respuesta.json());

export const services = {
  peticionProductos,
  peticionClientes,
  borrarProducto,
  agregarProducto
};
