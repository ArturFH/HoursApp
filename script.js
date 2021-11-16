function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if(hora >=0 &&  hora < 12){
        foto.src = 'manhã.jpg'
        document.body.style.background = '#F5DEB3'
    } else if(hora >=12 && hora <18){
        foto.src = 'tarde.jpg'
        document.body.style.background = '#90EE90'
    } else if(hora >=18 && hora < 00){
        foto.src = 'noite.jpg'
        document.body.style.background = '#FFDAB9z'
    
    }

}