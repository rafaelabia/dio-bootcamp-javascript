/*Funções Auxiliares*/

function gets() {
  return 10;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print }; /* objeto:module. atributo: exports; exportando um objeto que tem as funções get e print*/ 

/* outro exemplo que funcionaria:
module.exports.gets = gets; */