/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

function aplicarDesconto(valorProduto, porcentagem) {
  return valorProduto-(valorProduto*(porcentagem/100));
}

function aplicarJuros(valorProduto, juros) {
  return valorProduto+(valorProduto*(juros/100));
}

const precoProduto = 88;
const condicaoPagamento = 4;

if (condicaoPagamento === 1) {
  console.log("À vista Débito, recebe 10% de desconto: R$" + aplicarDesconto(precoProduto,10));
} else if (condicaoPagamento === 2) {
  console.log("À vista no Dinheiro ou PIX, recebe 15% de desconto: R$" + aplicarDesconto(precoProduto,15));
} else if (condicaoPagamento === 3) {
  console.log("Em duas vezes, preço normal de etiqueta sem juros: R$" + precoProduto);
} else {
  console.log("Acima de duas vezes, preço normal de etiqueta mais juros de 10%: R$" + aplicarJuros(precoProduto,10));
}