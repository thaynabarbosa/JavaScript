function imprimir(argumento){
  
  console.log(argumento)
  
}

function mesmoNome(a,b){
     return a == b
  }

function maiorDeIdade(idade){

  return idade >= 18
  
}

function valorComJuros(valor){

return valor + ((valor * 10) / 100)

}

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

function margemBruta(receitaLiquida,custoProdutosVendidos){

lucroBruto = receitaLiquida - custoProdutosVendidos

return ((lucroBruto / receitaLiquida) * 100)

}

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]