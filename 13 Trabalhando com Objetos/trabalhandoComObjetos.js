var myobj = {
    a : 2,
    b : 4,
    c : 6
}// declarei um obejtos bem simples e coloquei algumas propriedades

//podemo sacessar o objeto globas e pegar as keys 

Object.keys(myobj)//se parçamos nosso objetos para esta função ele vai retornar o array com todas as chaves do nosso objetos 

Object.value(myobj) // da mesma for que temos as chaves temos os valores que são apresentado em ordem 

// caso queria saber se tem u propriedade podemos usar 

myobj.hasOwnProperty('a')
// true por que temos o a 

myobj.hasOwnProperty('d')
// false

// para ficar mais simples podemos passar o in 

'a' in myobj
true 
'd' in myobj
false 

// quando quiser uma lista com as chaves e os valore sod oobejto 

Object.entries(myobj) // ele retorna um array e dentro o array tem outro array onde a posição 0 vai ser a chave e o 1 o valor 


//evitar que o obejto seja alterado, ous ej aninguem pode laterar os valores 

Object.seal(myobj) // objeto celado 

//a diferença é pofrmos acessar um propriedade e alterar o seu valor mas se tentar incesrir uma nova propriedade não vai haver alteração, não pode ser incerida propriedades novas, e tambem não pode apagar as propriedade 
// os objetos selados podem ter o seu valor alterado mas não podem ser emovidos ou incerridas 

Object.freeze(myobj)// a diferença é que não poderemos nem alterar o valor se tentar remover ele retorna false 

//o freeze alem de evitar a remoção e adição os vlaores não são alterados 

// para saber se o obejtos esta selado ou congelado 

Object.isSealed(myobj)// indica se o objetos esta selado 

Object.isFrozen(myobj)// indica se o obetos esta congelado 