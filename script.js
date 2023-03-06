function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = 'Agora são exatamente ' + hora + ' horas.'

    if (hora >= 0 && hora < 12) {
        //BOMDIA
        msg.innerHTML += 'Bom Dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#6782f0'


    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'Boa Tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#95904b'

    } else {
        //boa noite
        msg.innerHTML += 'Boa Noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#292a3f'
    }


}