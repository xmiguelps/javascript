let valores = [8, 1, 7, 4, 2, 9]
   
/*
    FORMA ERRADA DE MOSTRAR VARIOS VETORES
    
    console.log(num[0])
    console.log(num[1])
    console.log(num[2])
    console.log(num[3])
    console.log(num[4])
    console.log(num[5])

    NÃO FAÇA ISSO
*/ 

/* Voce pode fazer isso, esse é o jeito tradicional

for (let c = 0;c < valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/

/* Ou voce pode fazer de um jeito mais simples e especial usando um for especifico para esse tema */

for(let c in valores) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}