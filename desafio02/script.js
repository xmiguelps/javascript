function verificar() {
    let ano = document.getElementById('ano')
    let string_ano = String(ano.value)
    let year = Number(ano.value)
    let data = new Date()
    let date = data.getFullYear()
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let res = document.getElementById('res')
    let idade = date - year
    res.style.textAlign = 'center'
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (string_ano.length < 4 || string_ano.length > 4 || (male.checked == false && female.checked == false)) {
        alert('[ERRO] REVISE O FORMULARIO E TENTE NOVAMENTE')
    } else if (male.checked == true && idade < 5) {
        res.innerHTML = `Detectamos Bebe de ${idade} anos`
        img.setAttribute('src', 'imagens/bebe-masculino.jpg')
        //foto de bebe masculino
    } else if (male.checked == true && idade < 12) {
        res.innerHTML = `Detectamos Menino de ${idade} anos`
        img.setAttribute('src', 'imagens/criança-masculino.jpg')
        //foto de criança masculina
    } else if (male.checked == true && idade < 17) {
        res.innerHTML = `Detectamos Adolescente de ${idade} anos`
        img.setAttribute('src', 'imagens/adolescente-masculino.jpg')
        //foto de adolescente masculino
    } else if (male.checked == true && idade < 56) {
        res.innerHTML = `Detectamos Homem de ${idade} anos`
        img.setAttribute('src', 'imagens/adulto-masculino.jpg') 
        //foto de adulto masculino
    } else if (male.checked == true && idade < 100) {
        res.innerHTML = `Detectamos Idoso de ${idade} anos`
        img.setAttribute('src', 'imagens/idoso-masculino.jpg')
        //foto de idoso masculino
    } else if (female.checked == true && idade < 5) {
        res.innerHTML = `Detectamos Bebe de ${idade} anos`
        img.setAttribute('src', 'imagens/bebe-feminino.jpg')
        //foto de bebe feminino
    } else if (female.checked == true && idade < 12) {
        res.innerHTML = `Detectamos Menina de ${idade} anos`
        img.setAttribute('src', 'imagens/criança-feminino.jpg')
        //foto de criança feminina
    } else if (female.checked == true && idade < 17) {
        res.innerHTML = `Detectamos Adolescente de ${idade} anos`
        img.setAttribute('src', 'imagens/adolescente-feminino.jpg')
        //foto de adolescente feminino
    } else if (female.checked == true && idade < 56) {
        res.innerHTML = `Detectamos Mulher de ${idade} anos`
        img.setAttribute('src', 'imagens/adulto-feminino.jpg')
        //foto de adulto feminino
    } else if (female.checked == true && idade < 100) {
        res.innerHTML = `Detectamos Idosa de ${idade} anos`
        img.setAttribute('src', 'imagens/idoso-feminino.jpg')
        //foto de idoso feminino
    }
    res.appendChild(img)
}

/*
    para criar uma tag usando JavaScript, crie uma variavel e use "document.createElement('elemento que quer criar')"

    voce pode colocar atributos nele fazendo:
        variavel.setAttribute('atributo', 'oque esse atributo recebe')

    e para adicionalo a algum lugar/tag faça:
        variavel do lugar.appendChild(variavel da tag criada )
*/