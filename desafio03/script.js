function contar() {
    let i = document.getElementById('inicio')
    let f = document.querySelector('input#fim')
    let p = document.getElementById('passo')
    let r = document.getElementById('res')
    var fim = Number(f.value)
    var passo = Number(p.value)
    for (var inicio = Number(i.value); inicio <= fim; inicio += passo) {
        r.innerText += `${inicio}👉`
    }
    r.innerText += `🏁`
}