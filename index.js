const numero = 3;
const numeroPar = (numero % 2) === 0;
if (numero === 0) {
    console.log("O número é inválido")
} else if (numeroPar) {
    console.log("PAR");
} else (!numeroPar); {
    console.log("ÍMPAR");
}