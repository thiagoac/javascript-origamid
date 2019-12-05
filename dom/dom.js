document.querySelector('h1').innerHTML = 'Teste'

let btn = document.querySelector('button')
let form = document.querySelector('input')

/*
btn.addEventListener('click',function(){
    document.querySelector('h1').innerHTML = 'Teste evento'
})*/

form.addEventListener('keyup',function(){
    document.querySelector('h1').innerHTML = form.value
})