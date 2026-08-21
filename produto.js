const produtoObject = {
  nome: "Mouse positivo",
  preco: 9.99,
  estoque: 10,
};

for (const chave in produtoObject) {
  let atributo = produtoObject[chave];
  console.log(`${chave}: ${atributo}`);
}
