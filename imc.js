const peso = 76;
const altura = 1.75;

function calcularImc(peso, altura) {
    const imc = peso / altura**2;
    
    if (imc < 18.5) {
        console.log("Você está abaixo do peso");
    } else if(imc > 24.9) {
        console.log("Você está acima do peso");
    } else {
        console.log("Você está no peso ideal");
    }
}

calcularImc(peso, altura)