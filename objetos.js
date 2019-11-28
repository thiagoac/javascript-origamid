//Objeto
const pessoa = {
    nome: 'Thiago',
    idade: 16,
    profissão: 'Front',

    //Metodo
    idadeMilitar: function(idade){
        
        if(idade <= 18){
            return true
        }else{
            return false
        }
    }
}

console.log(typeof pessoa)

console.log(pessoa.idadeMilitar(15))