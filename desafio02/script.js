function verificar() {
    let ano = document.getElementById('ano')
    let string_ano = String(ano.value)
    let year = Number(ano.value)
    let data = new Date()
    let date = data.getFullYear()
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let res = document.getElementById('res')
    if (string_ano.length < 4 || (male.checked == false && female.checked == false)) {
        alert('[ERRO] REVISE O FORMULARIO E TENTE NOVAMENTE')
    } else if (male.checked == true && year >= date - 5) {
        res.innerHTML = `Detectamos Bebe de ${date - year} anos`
        //foto de bebe masculino
    } else if (male.checked == true && year >= date - 12) {
        res.innerHTML = `Detectamos Menino de ${date - year} anos`
        //foto de criança masculina
    } else if (male.checked == true && year >= date - 15) {
        res.innerHTML = `Detectamos Adolescente de ${date - year} anos`
        //foto de adolescente masculino
    } else if (male.ckecked == true && year >= date - 21) {
        res.innerHTML = `Detectamos Homem de ${date - year} anos` 
        //foto de adulto masculino
    } else if (male.checkd == true && year >= date - 56) {
        res.innerHTML = `Detectamos Idoso de ${date - year} anos`
        //foto de idoso masculino
    } else if (female.checked == true && year >= date - 5) {
        res.innerHTML = `Detectamos Bebe de ${date - year} anos`
        //foto de bebe feminino
    } else if (female.checked == true && year >= date - 12) {
        res.innerHTML = `Detectamos Menina de ${date - year} anos`
        //foto de criança feminina
    } else if (female.checked == true && year >= date - 15) {
        res.innerHTML = `Detectamos Adolescente de ${date - year} anos`
        //foto de adolescente feminino
    } else if (female.checked == true && year >= date - 21) {
        res.innerHTML = `Detectamos Mulher de ${date - year} anos`
        //foto de adulto feminino
    } else if (female.checked == true && year >= date - 56) {
        res.innerHTML = `Detectamos Idosa de ${date - year} anos`
        //foto de idoso feminino
    }
}