const precoProduto = 100;
const formaDePagamento = 5;

if (formaDePagamento === 1) {
    console.log(precoProduto - (precoProduto * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoProduto - (precoProduto * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoProduto);
} else {
    console.log(precoProduto + (precoProduto * 0.10));
}