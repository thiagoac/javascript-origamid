/*const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao')

h1.innerText = "Thiago"
//innerHTML return html tags with the text, innerText return only the text in TAG
console.log(animaisLista.innerHTML)*/

//dupliqu o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy =  document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)