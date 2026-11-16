// 1. CONTENIDO: cambiar el texto del título
const titulo = document.querySelector("h1");
titulo.textContent = "Catálogo de Mercado Sumaq";
console.log("Título:", titulo.textContent);

// 2. ATRIBUTO: cambiar el texto alternativo de la imagen
const imagen = document.querySelector("img");
imagen.setAttribute("alt", "Bolsa de quinua blanca de 1 kg");
console.log("Atributo alt:", imagen.getAttribute("alt"));

// 3. CLASE: agregar "oferta" al precio (se pone rojo)
const precio = document.querySelector(".precio");
precio.classList.add("oferta");
console.log("Clases del precio:", precio.className);