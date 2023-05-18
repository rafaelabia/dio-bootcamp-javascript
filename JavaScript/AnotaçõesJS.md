# Aula 1 - Variaveis e Operadores
let variavel = 10; é possível alterar o valor depois
const pi = 3.14; é uma constante, por isso não é possível alterar o valor

operadores: + - * /

console.log("Imprimir um texto."); saída de dados na tela

valorGasto.toFixed(2) = para aparecer apenas 2 casas decimais

# Aula 2 - Condicionais
Igual:
'==' ignora o tipo de variável;
'===' não ignora o tipo de variável e por isso é mais utilizado.

Negação:
!variavel - inclui o exclamação na frente.

#Aula 3 - Exercícios
&& = e
|| = ou

potência: Math.pow(5,7)

Obs: É comum na programação convertermos algum conceito humano para algo minimalista, como uma lista enumerada em vez da descrição dos tipos. O contrário também acontece.

# Aula 4 - Funções
Os nomes das funções geralmente são escritas com o nome no modo imperativo: ex: escrevaMeuNome
Exemplo de função com cálculo de percentual:
function incrementarJuros (valor, percentualJuros) { 
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
  }

console.log(incrementarJuros (100, 10));

Obs: No JavaScrip as funções são utilizadas como objetos, assim como utilizamos números e textos.

Outros exemplos de funções:
function aplicarDesconto(valorProduto, porcentagem) {
  return valorProduto-(valorProduto*(porcentagem/100));
}

function aplicarJuros(valorProduto, juros) {
  return valorProduto+(valorProduto*(juros/100));
}

# Aula 5 - Objetos
O objeto no javaScript é uma coleção dinâmica de chave e valor, podendo adicionar e remover. 
Maneira mais simples para criação de uma instância da classe Pessoa: new Pessoa('Renan',30);

# Aula 6 - Listas (Arrays) e Depuração
const alunos = ['João, 'Vitor', 'Marina];

Para depuração no VSCode:
1º Selecionar qual a linha que gostaria de testar, do lado esquerdo do número da linha seleciona uma bolinha vermelha;
2º Clicar no botão chamado "Run and Debug" no menu;
3º Visualizar a execução do código linha por linha caso necessário, podendo analisar os detalhes de como ele ocorre.

# Aula 7 - Importação com JS e node
Encupsulamento de código, Importação de arquivos

gets: entradas - pega a leitura como se alguém digitasse o conteúdo
print: saídas - como se fosse o console.log

*object destructuring: 
const { gets, print } = require('./aula7-funcoes-auxiliares');

const pessoa = {
  nome: 'vitor'
}

Equivalentes:
const { nome } = pessoa;
const nome = pessoa.nome; 

