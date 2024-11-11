let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora > 6) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else if (hora < 24 ) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}