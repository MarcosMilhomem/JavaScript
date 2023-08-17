function verificar() {
    var horaAtualizada = new Date()
    var data = horaAtualizada.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector ('div#res')
    if (fAno.value.length == 0 || fAno.value > data) {
        alert("Verifique os dados e tente novamente.")
    } else {
         var radsex = document.getElementsByName('radsex')
         var idade = data - Number(fAno.value)
         var genero = ''
         var img = document.createElement('img')
        img.setAttribute('id', 'foto')
         if (radsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 40) {
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }
         } else if (radsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 40) {
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'foto-idosa.jpg')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
    }
}