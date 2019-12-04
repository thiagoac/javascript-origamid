//Objeto
const pessoa = {
    nome: 'Thiago',
    idade: 20,
    profissão: 'FrontDesign',

    //Metodo
    idadeMilitar: function(){
        // o this acessa uma propriedade do objeto
        if(this.idade <= 18 || this.profissão == 'Front'){
            return true;
        }else{
            return false;
        }
    }
}

var menu = {
    background: 'black',
    width: 800,
    metadeWidth(){
        return this.width / 2;
    }
}

console.log(typeof pessoa);

console.log(pessoa.idadeMilitar());

//menu.width = 600

console.log(menu);

console.log(menu.metadeWidth());

console.log(menu.hasOwnProperty('width'));

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: '10',

    //Metódo
    latir(pessoa){
        if(pessoa !== 'homem'){
            //return console.log('não latir');
            return 'faz nada'
        }else{
            //return console.log('latir');
            return 'latir'
        }
    }

}

console.log(cachorro.latir('mulher').toUpperCase())