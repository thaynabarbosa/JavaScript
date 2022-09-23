// Atividade 1

function imprimir(argumento){
  
  console.log(argumento)
  
}


//Atividade 2

//Verifica se os dois nomes informados são iguais.

function mesmoNome(a,b){
     return a == b
  }

//chamando a função e mostrando na tela
console.log(mesmoNome("nomeDoFulano","nomeDoBeltrano"))

//verifica se é maior de idade
function maiorDeIdade(idade){

  return idade >= 18
  
}

//chamando a função e mostrando na tela
console.log(maiorDeIdade(30))

//Faz o calculo do boleto com juros
function boletoComJuros(valor){

return valor + ((valor * 10) / 100)

}

//chamando a função e mostrando na tela
console.log(boletoComJuros(175))

//faz o calculo da média aritmética
function mediaAritmetica(itens){

j = 0
soma = 0

  while(j < itens.length){
    soma = soma + itens[j]
    j++
  }
  console.log(itens)
  console.log(j)
  console.log(soma)
  console.log(itens.length)
  
return (soma/itens.length)
  
}

//chamando a função e mostrando na tela
console.log(mediaAritmetica([4,20,18,12,10]))

function margemBruta(receitaLiquida,custoProdutosVendidos){

lucroBruto = receitaLiquida - custoProdutosVendidos

return ((lucroBruto / receitaLiquida) * 100)

}

console.log(margemBruta(10000,6000))