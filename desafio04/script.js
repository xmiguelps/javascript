function calcular() {
    let n = document.getElementById('number')
    var num = Number(n.value)
    var nstring = String(n.value)
    let res = document.querySelector('select#tabuada')
    res.innerHTML = ''
    for (c = 1;c <= 10; c++) {
        const opt =  document.createElement('option')
        opt.innerText = `${num} x ${c} = ${num * c}`
        res.appendChild(opt)
    }
}