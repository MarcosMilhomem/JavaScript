const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580 ;

const valorViagem = (distanciaEmKm / kmPorLitros) * precoCombustivel;

console.log (valorViagem.toFixed(2));