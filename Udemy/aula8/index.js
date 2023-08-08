const nome = 'Marcos Apolo';
const sobrenome = 'Milhomem';
const idade = 18;
const peso = 76;
const altura = 1.80;
let anoNascimento;
let imc;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;
alert(`${nome} ${sobrenome} tem ${idade} anos, nascido em ${anoNascimento} e pesa ${peso}. Seu IMC é ${imc}`)