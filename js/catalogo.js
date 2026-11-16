// 1. Datos: arreglo de objetos con los platos
const platos = [
  { nombre: "Pachamanca", detalle: "Plato típico", precio: 18, stock: 0 },
  { nombre: "Trucha frita", detalle: "Con papas y choclo", precio: 12, stock: 20 },
  { nombre: "Kankacho", detalle: "Cordero al horno", precio: 15, stock: 15 },
  { nombre: "Thimpo", detalle: "Caldo de pescado", precio: 10, stock: 25 },
];

// 2. Contenedor donde van las tarjetas
const lista = document.querySelector("#catalogo");

// 3. Recorrer el arreglo y crear una tarjeta por plato
for (const p of platos) {
  const tarjeta = document.createElement("li");
  tarjeta.classList.add("tarjeta");
  if (p.stock === 0) {
    tarjeta.classList.add("agotado");          // caso especial: con clase
  }

  const titulo = document.createElement("h2");
  titulo.textContent = p.nombre;

  const detalle = document.createElement("p");
  detalle.textContent = p.detalle;

  const precio = document.createElement("p");
  precio.className = "precio";
  precio.textContent = `S/ ${p.precio.toFixed(2)}`;

  const estado = document.createElement("p");
  estado.className = "estado";
  estado.textContent = p.stock > 0 ? `Disponible (${p.stock})` : "Agotado"; // caso especial: con texto

  tarjeta.append(titulo, detalle, precio, estado);
  lista.append(tarjeta);
}

// 4. Resumen con un método de arreglos
const disponibles = platos.filter((p) => p.stock > 0).length;
document.querySelector("#resumen").textContent =
  `${disponibles} de ${platos.length} platos disponibles.`;