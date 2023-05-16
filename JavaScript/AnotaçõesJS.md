#Aula 1 - Criação de variável
let variavel = 10; é possível alterar o valor depois
const pi = 3.14; é uma constante, por isso não é possível alterar o valor

operadores: + - * /

console.log("Imprimir um texto."); saída de dados na tela

valorGasto.toFixed(2) = para aparecer apenas 2 casas decimais

#Aula 2 -
Igual:
'==' ignora o tipo de variável;
'===' não ignora o tipo de variável e por isso é mais utilizado.

Negação:
!variavel - inclui o exclamação na frente.

#Aula 3 - 
&& = e
|| = ou

potência: Math.pow(5,7)

Obs: É comum na programação convertermos algum conceito humano para algo minimalista, como uma lista enumerada em vez da descrição dos tipos. O contrário também acontece.

#Aula 4 -
Os nomes das funções geralmente são escritas com o nome no modo imperativo: ex: escrevaMeuNome
Exemplo de função com cálculo de percentual:
function incrementarJuros (valor, percentualJuros) { 
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
  }

console.log(incrementarJuros (100, 10));

Obs: No JavaScrip as funções são utilizadas como objetos, assim como utilizamos números e textos.

