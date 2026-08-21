const carrosArray = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2010,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2016,
  },
  {
    marca: "Volkswagen",
    modelo: "Golf",
    ano: 2021,
  },
];

for(let i = 0; i < carrosArray.length; i++) {
    let carro = carrosArray[i];

    if (carro.ano > 2015) {
        console.log(`O carro ${carro.modelo}, da marca ${carro.marca} é depois de 2015 (${carro.ano})`)
    }
}