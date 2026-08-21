const vetorInteiro = [10, 20, 30, 40, 50];

let maior = vetorInteiro[0];
let menor = vetorInteiro[0];

for (let i = 0; i < 5; i++) {
  let numero = vetorInteiro[i];
  if (numero > maior) {
    maior = numero;
  } else {
    menor = numero;
  }
}

console.log(`O menor valor é ${menor}`);
console.log(`O maior valor é ${maior}`);
