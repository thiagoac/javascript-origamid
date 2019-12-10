//classes e atributos

const menu = document.querySelector('.menu')
const animais = document.querySelector('.animais')
const img = document.querySelector('img')

//class Lits
menu.classList.add('ativo', 'teste')
menu.classList.remove('teste')
menu.classList.toggle('azul')
menu.classList.contains('teste') //retorna boolean



//retorna a lista de classe
console.log(menu.classList)

//atributtes
console.log(animais.attributes)//retorna todos atributos
console.log(animais.attributes.id)//retorna o atributo ID
console.log(animais.attributes.class)//retorna o atributo class

//
img.setAttribute('alt', 'teste2')//Inseri qualquer atributo
console.log(img.getAttribute('src')) //retorna o src da imagem
console.log(img.getAttribute('alt')) //retorna o alt
console.log(img.hasAttribute('alt'))// verifica se possui o atributo - retorna true ou false
//console.log(img.removeAttribute('alt'))// verifica se possui o atributo - retorna true ou false

