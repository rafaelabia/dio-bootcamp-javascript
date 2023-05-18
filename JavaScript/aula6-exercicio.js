// 1) Crie um programa que dado um número imprima a sua tabuada.

/*
const numero = 4;
for (let i=0; i<=10; i++) {
  console.log(numero + "x" + i + " = " + (numero*i));
}
*/

// 2) Crie um programa que seja capaz de percorrer a lista de números e imprima cada número Par encontrado.

const numeros = [7,12,24,35];

for (let i = 0; i<numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0){
    console.log(numero);
  }
}
