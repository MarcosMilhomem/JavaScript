const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaViagem = 100;
const tipoCombustivel = 'Gasolina';

const litrosGastos = distanciaViagem / kmPorLitro;

if(tipoCombustivel === 'Etanol') {
    const valorGasto = litrosGastos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosGastos * precoGasolina;
console.log(valorGasto.toFixed(2));

}
