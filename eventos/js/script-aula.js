const linksInternos = document.querySelectorAll('a[href^="#"]')

function hanleLink(event){
    event.preventDefault() // evita  comportamento padrao do link

    linksInternos.forEach((link) => {
        link.classList.remove('ativo') // verifica os elementos que possui a classe atio e remove
    })

    event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
    link.addEventListener('click', hanleLink)
})

//Selecione todos os elementos do site

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
    //console.log(event.currentTarget)
    event.currentTarget.remove() //remove os elemntos e os envolvidos
}

todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento)
})


function handleClickT(event){
    console.log(event.key)
    if(event.key === 't') {
        document.documentElement.classList.toggle('aumentaTexto')
    }
}

window.addEventListener('keydown', handleClickT)