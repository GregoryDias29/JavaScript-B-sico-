// //criei uma variavel e nela contem umarray que dentro deste array vai conter outros arrays que seram as linhas 
// var Table = {
//     field: [
//         ['','',''],
//         ['','',''],
//         ['','','']
//     ],
//     position:[0,0],
//     up(){
//         if (this.position[0] > 0){ // se for maior que zero, por que maior que zero por que não pode passar da primeira posição 
//             this.position[0]--,
//         }
//         this.print();

//     },
//     // se ele não passar da umtima linha ele pode pegar e aumentar ++

//     //ao inves de pegar a posição zero ppegamos a posição 1 que indeicada a coluna assim fara o moviemto da esquer e direita

//     print(){
//         var lineStr = '';
//         for (var i= 0; i < this.field.length; i++){ // para saber o tamenho e ate onde pode ir 
//             var line = this.field[i]; // o i vai indeicar em qual linha estamos trabalhando 
//             for(var j = 0; j < line.length; j++){
//                 if (this.position[0] === i && thid.position[1] === j){// se a posição inicial do personagem bater com a pocisão que mandarmos imprimir imprimimos o x se não vazio 
//                     lineStr += '┼ X ┼';
//                 }else{
//                     lineStr += '┼   ┼';
//                 }
//             }
//             lineStr += '\n'
//         }
//         console.log(lineStr);
  
//     }
// }
// Table.print();//para que oconsole assim que chamar ele já seja iniciado