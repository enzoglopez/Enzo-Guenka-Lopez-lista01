const vetorNumero = [20, 10, 5];

function organizarNumero(vetor) {
    const teste = vetor.sort((a,b) => a - b)
    console.log(teste)
}

organizarNumero(vetorNumero);