var anoGanhouCopa =  ['1959','1962', '1970', '1994', '2002']

//console.log(anoGanhouCopa[0])

for(var i = 0; i < anoGanhouCopa.length; i++){
    console.log(`O Brasil Ganhou a Copa do Mundo de ${anoGanhouCopa[i]}`)
}


// Criar o loop até a fruta pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 1; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){
        break
    }
}

var escolheFruta = frutas[frutas.length - 1]
console.log(escolheFruta)