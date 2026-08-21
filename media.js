const vetorInteiro = [10, 20, 30, 40, 50];

let total = 0;
let tamanho = vetorInteiro.length;

for (let i = 0; i < tamanho; i++) {
  let numero = vetorInteiro[i];
  total += numero;
}

let media = total / tamanho;

console.log(media);
