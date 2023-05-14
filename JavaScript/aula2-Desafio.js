/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 4.13;
const precoGasolina = 5.83;
const kmPorLitros = 5;
const distanciaKm = 30;
const tipoCombustivel = 'Etanol';

const mediaCombustivel = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
  const valorGastoGasolina = mediaCombustivel * precoGasolina;
  console.log("O valor da viagem é R$" +  valorGastoGasolina.toFixed(2));
} else {
  const valorGastoEtanol = mediaCombustivel * precoEtanol;
  console.log("O valor da viagem é R$" + valorGastoEtanol.toFixed(2));
}