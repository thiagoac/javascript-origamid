const clickImagens = document.querySelectorAll('img')

function callback(event){
    console.log(event.target) // é possível selecionar os atributos do evento 
}

clickImagens.forEach((imagem) => {
    imagem.addEventListener('click', callback) 
})

