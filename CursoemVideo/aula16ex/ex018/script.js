let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('res')
let valores = []

function add() {
    if(isNumber(num.value) && inList(num.value, valores)) {
        valores.push(Number(num.value))
    }  else {
        alert("Número inválido ou já existente")
    }
}

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n) != -1)) {
        return true
    } else{
        return false
    }
}