/* Exemplo1: 
function incrementarJuros (valor, percentualJuros) { 
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
  }

console.log(incrementarJuros (100, 10));
console.log(incrementarJuros (100, 15)); */

function verificarIdade(idade){
  if (idade>=18){
  return 'Maior de idade.'; /* podia ser direto para imprimir: console.log('Maior de idade.') */
  } else {
  return 'Menor de idade.';
}}

const idade = 18;
console.log(verificarIdade(idade));
