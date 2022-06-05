let dimensionArreglo: number = Number(
  prompt("Ingrese la dimension del arreglo")
);
let numeros: number[] = new Array(dimensionArreglo);
let indice: number;
for (indice = 0; indice < dimensionArreglo; indice++) {
  numeros[indice] = Number(prompt(`Ingrese el numero ${indice}`));
}
for (indice = dimensionArreglo - 1; indice >= 0; indice--) {
  console.log(`La salida es ${numeros[indice]}`);
}
