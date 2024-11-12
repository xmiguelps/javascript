function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'foto-dia.png'
        //voce pode depois do "." selecionar os elementos da tag
        document.body.style.background = '#FCE6C9'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'foto-tarde.png'
        document.body.style.background = '#E1824C'
    } else {
        //BOA NOITE
        img.src = 'foto-noite.png'
        document.body.style.background = '#243131'
        
    }
}