document.querySelector('h1').innerHTML = 'Teste'

let btn = document.querySelector('button')

btn.addEventListener('click',function(){
    document.querySelector('h1').innerHTML = 'Teste evento'
})