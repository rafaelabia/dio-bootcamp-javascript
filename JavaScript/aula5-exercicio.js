/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor (marca,cor,gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  valorDoPercurso(distanciaKm,precoCombustivel) {
    return distanciaKm * this.gastoMedioKm * precoCombustivel;
  }
}


const uno = new Carro('Fiat','branco',1/12);
console.log(uno);
console.log(uno.valorDoPercurso(70,5));


const palio = new Carro('Fiat','preto',1/10);
console.log(palio);
console.log(palio.valorDoPercurso(70,5));