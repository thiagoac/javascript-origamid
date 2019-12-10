// Height e Width

const section = document.querySelector('.animais')
const tituloAnimais = document.querySelector('h2')

console.log(section.clientHeight) //height+padding
console.log(section.offsetHeight) //height+padding+border
console.log(section.scrollHeight) //height total, mesmo dentro de scroll
console.log(section.offsetTop) //distancia entre o elemento e o topo
console.log(tituloAnimais.offsetLeft) //distancia entre o elemento e a esquerda
console.log(tituloAnimais.getBoundingClientRect()) //verifica os parametros em volta do elemento

//parametros de janelas window
console.log(window.innerWidth) // width da janela
console.log(window.outerWidth) //doma dev tools também
console.log(window.outerHeight) //doma dev tools também
console.log(window.innerHeight) //doma dev tools também

const small = window.matchMedia('(max-width: 600px)')

console.log(small)

if(small.matches){
    console.log('usuário mobile')
}else{
    console.log('Usuário desktop')
}

//Exercicios
console.log('exercicios')

const imagem = document.querySelector('img')
const todasImagens = document.querySelectorAll('img')

console.log(imagem.offsetTop)//distancia da primeira imagem em relação ao topo da página
console.log(imagem.offsetWidth)//largura da imagem

console.log(todasImagens)

todasImagens.forEach((item) => {
    let soma = soma + item
    console.log(item.offsetWidth)
})