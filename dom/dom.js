//document.querySelector('h1').innerHTML = 'Teste'

//let btn = document.querySelector('button')
//let form = document.querySelector('input')



/*
btn.addEventListener('click',function(){
    document.querySelector('h1').innerHTML = 'Teste evento'
})

form.addEventListener('keyup',function(){
    document.querySelector('h1').innerHTML = form.value
})

*/


        
        let data = new Date()
        let dia = data.getDate()
        let mes = data.getMonth() + 1 // adicionei por causa que começa em zero
        let ano = data.getFullYear()

        //função mostrar de acordo com a data

        document.getElementById('sumir').style.display = 'none'

        for( dia = 21   ; dia > 20 && dia < 27 && mes == 12 && ano == 2019; dia++){

            document.getElementById('disponivel').style.display = 'none'
            document.getElementById('sumir').style.display = 'inline'

        }



/*
if(dia == 1){
    //document.querySelector('p').innerHTML = 'deu certo'
    console.log(dia)
}
*/



