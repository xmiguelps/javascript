function verificar() {
    let ano = document.getElementById('ano')
    let string_ano = String(ano.value)
    let year = Number(ano.value)
    let data = new Date()
    let date = data.getFullYear()
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    if (string_ano.length < 4 || (male.checked == false && female.checked == false)) {
        alert('[ERRO] REVISE O FORMULARIO E TENTE NOVAMENTE')
    } else if (male.checked == true && year >= date - 5) {
        //foto de bebe masculino
    } else if (male.checked == true && year >= date - 12) {
        //foto de criança masculina
    } else if (male.checked == true && year >= date - 15) {
        //foto de adolescente masculino
    } else if (male.ckecked == true && year >= date - 21) {
        //foto de adulto masculino
    } else if (male.checkd == true && year >= date - 56) {
        //foto de idoso masculino
    } else if (female.checked == true && year >= date - 5) {
        //foto de bebe feminino
    } else if (female.checked == true && year >= date - 12) {
        //foto de criança feminina
    } else if (female.checked == true && year >= date - 15) {
        //foto de adolescente feminino
    } else if (female.checked == true && year >= date - 21) {
        //foto de adulto feminino
    } else if (female.checked == true && year >= date - 56) {
        //foto de idoso feminino
    }
}