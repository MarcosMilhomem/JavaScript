// const array = [1,2,3];

// array.push(4);
// array[0] = "Luiz";
// console.log (array)


// const nome01 = 'Luis';
// const sobrenome01 = 'Miranda';
// const idade1 = '23';

// const nome02 = 'Andre';
// const sobrenome02 = 'Abreu';
// const idade2 = '53';

/*
const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Miranda',
    idade: 23
};

const pessoa2 = {
    nome: 'Andre',
    sobrenome: 'Abreu',
    idade: 53
};

console.log(pessoa2.nome);
*/

/*
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa ('Luiz', 'Andrade', 23);
const pessoa2 = criaPessoa ('Dulcy', 'Carvalho', 13);
const pessoa3 = criaPessoa ('Apolo', 'Milhom', 32);

console.log(pessoa2.nome, pessoa1.idade);
*/

const pessoa1 = {
    nome: 'Apolo',
    sobrenome: 'Milhomem',
    idade : 18,

    fala () {
        console.log (`a minha idade atual é de ${this.idade}.`);
    },

    incrementoIdade () {
        this.idade++;
    }
};

pessoa1.fala()
pessoa1.incrementoIdade();
pessoa1.fala()
pessoa1.incrementoIdade();
pessoa1.fala()
pessoa1.incrementoIdade();
pessoa1.fala()
pessoa1.incrementoIdade();
pessoa1.fala();