const nome = "Enzo";
const idade = 20;

function calcularVotacao(nome, idade) {
  if (idade < 18) {
    console.log(`O usuário ${nome}, não pode votar`);
  } else {
    console.log(`O usuário ${nome}, pode votar`);
  }
}

calcularVotacao(nome, idade);