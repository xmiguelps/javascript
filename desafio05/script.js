let n = document.getElementById('inum')
var nstring = String(n.value)
let valores = []
const res = document.getElementById('res')
function add() {
    let num = Number(n.value)
    res.innerHTML = ''
    if (num > 100 || valores.indexOf(num) != -1 || num < 1) {
        alert('Valor invalido ou ja encontrado na lista')
    } else {
        var opt = document.createElement('option')
        let lista = document.querySelector('select#lista')
        opt.innerHTML = `Valor ${num} adicionado`
        lista.appendChild(opt)
        valores.push(Number(n.value))
    }
}

function maior(x) {
    valores.sort()
    return valores[valores.length - x]
}

function menor(n) {
    valores.sort()
    return valores[n]
}

function soma(c) {
    var r = valores[0]
    while (c < valores.length) {
        r += valores[c]
        c++
    }
    return r
}

function calcular() {
    if (lista.length < 2) {
        alert(`Adicione pelo menos 2 numeros`)
    } else {
        res.innerHTML = `<p>Ao todo, temos ${valores.length} numeros cadastrados</p>`
    
        res.innerHTML += `<p> O maior valor informado foi ${maior(1)} </p>`
        
        res.innerHTML += `<p> O menor valor informado foi ${menor(0)} </p>`

        res.innerHTML += `<p>Somando todos os valores, temos ${soma(1)}</p>`

        res.innerHTML += `<p>A media dos valores digitados é ${soma(1) / valores.length} </p>`
    }
}