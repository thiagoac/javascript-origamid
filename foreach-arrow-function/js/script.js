const img = document.querySelectorAll('img')

const titulos = document.getElementsByClassName('titulos')

const arrayTitulos = Array.from(titulos) // transforma um HTML Collection em array e pode ser lido pelo Foreach

//console.log(titulos)

//console.log(img)


//funcio for each com callback
img.forEach(function(item){
    //console.log(item)
})

//exemplo de function
arrayTitulos.forEach(function(item){
    //console.log(item)
})

//Arrow Function
arrayTitulos.forEach((item) => {
    console.log(item)
})

//Arrow Function
arrayTitulos.forEach((item) => {
    console.log(item.innerHTML)
})

//classList

const menu = document.querySelector('.menu')
console.log(menu.classList)