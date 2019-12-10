const clickImagen = document.querySelector('img')
/*
function callback(){
    console.log("imagem clicada")
}
*/

function callback(event){
    console.log(event.target) // é possível selecionar os atributos do evento 
}

//evento e função de Callback
clickImagen.addEventListener('click', callback) 