function contar() {
    let i = document.getElementById('inicio')
    let f = document.querySelector('input#fim')
    let p = document.getElementById('passo')
    let r = document.getElementById('res')
    var fim = Number(f.value)
    var passo = Number(p.value)
    if (String(i.value).length == 0 || String(f.value).length == 0) {
        r.innerText = 'Impossivel Contar'
    } else {
        if (String(p.value).length == 0) {
            alert('Passo invalido! Considerando PASSO 1')
        }
        passo = 1
        r.innerText = ''
        for (var inicio = Number(i.value); inicio <= fim; inicio += passo) {
            r.innerText += `${inicio}👉`
        }
        r.innerText += `🏁`
    }
    /*for (var inicio = Number(i.value); inicio <= fim; inicio += passo) {
        r.innerText += `${inicio}👉`
    }
    r.innerText += `🏁`*/
}