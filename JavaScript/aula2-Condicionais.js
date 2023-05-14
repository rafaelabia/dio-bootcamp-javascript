const numero = 3;

const isNumeroPar = (numero % 2) === 0;
/* '==' ignora o tipo de variável, '===' também é igual, mas não ignora o tipo de variável e por isso é mais utilizado */

/* Utilizamos a função if com o boolean, se verdadeiro a função if executa, se falso ela não executa */
if (isNumeroPar) {
  console.log("Par");
} else {
  console.log("Impar");
}
