/*
var _b = 5; //tem que criar esta var para poder armazenar o valor do set pode ser tanto fora quandto dentro
var myObj = {
    a:2,
    get b(){
      // como o metodo get vai  ser executado quando acessar a propriedade é obrigatorio o return
      console.log('acesso');
      return _b;

    // se tertamos myObj.b = 7 ele não vai mudar por que o b é so um get não tem set para atribuir valor
    },// para fazer o get, fazemos a chamada de get + nome() + {}
    // para atribuir valor 
    set b(value) {// so que o set é quando atribuimos o vamr = 
        console.log('valor alterado')
        // _b = value * 2; podemos fazer isso
        _b = value;
    }//
}
*/
// vamos imaginar que queremos que o b so tenha valores pares 

var _b = 0;

var myObj = {
    a:2,
    get b() {
        return _b;
    },
    set b (value){
        if(value % 2 === 0){
            _b = value;
        }else{
            _b = console.error('Negado');
            //poso usar return tamebm 
        }
    }
}
