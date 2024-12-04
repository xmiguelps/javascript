let n = document.getElementById('inum')
let valores = []
function add() {
    let num = Number(n.value)
    const res = document.getElementById('res')
    res.innerHTML = ''
    var opt = document.createElement('option')
    let lista = document.querySelector('select#lista')
    opt.innerHTML = `Valor ${num} adicionado`
    lista.appendChild(opt)
    valores.push(Number(n.value))
}

function calcular() {
     
}