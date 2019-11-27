// verifica se numero é TRUE ou FALSE

function verificaValor(valor){
    return !!valor
}

console.log(verificaValor(9))

// perimetro
function encontraPerimetro(lado){
    return lado * 4
}

console.log(encontraPerimetro(6))

// Function Fullname
function fullName(name,lastname){
    return `${name} ${lastname}`
}

console.log(fullName('Thiago','Augusto'))

// Verificar se o numero é par

function validaNumer(numero){
    var modulo = numero % 2
    if(modulo === 0){
        return true
    }else{
        return false
    }
}

console.log(validaNumer(10))

//function Tipo de dado

function tipoDado(dado){
    return typeof dado
}

console.log(tipoDado('thiago'))

//evento

addEventListener('click', function(){
    console.log('2pac')
})