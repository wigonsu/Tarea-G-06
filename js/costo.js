// Reglas: adulto S/ 85, niño (menor de 12) S/ 45;
// grupos de 5 o más personas: 10 % de descuento;
// temporada alta (julio y agosto): +15 %
function costoPaquete(adultos, ninos, mes) {
  if (adultos < 1) {
    throw new Error("Debe viajar al menos un adulto");
  }
  let total = adultos * 85 + ninos * 45;
  if (adultos + ninos >= 5) {
    total = total * 0.9;
  }
  if (mes === 7 || mes === 8) {
    total = total * 1.15;
  }
  return Math.round(total * 100) / 100;
}

const costo = costoPaquete(4, 1, 8);
document.querySelector("#resultado").textContent =
  `Paquete para 4 adultos y 1 niño en agosto: S/ ${costo.toFixed(2)}`;


  // Pruebas de la función (se ven en F12 → Consola)
console.log("Caso (2, 0, 3):", costoPaquete(2, 0, 3));   
console.log("Caso (3, 2, 5):", costoPaquete(3, 2, 5));  
try {
  costoPaquete(0, 2, 7);
} catch (error) {
  console.log("Caso (0, 2, 7):", error.message)
}