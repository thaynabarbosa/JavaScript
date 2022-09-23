
// Atividade 1

meses = ["Janeiro","Fevereiro","Março","Abril","Maio"]

for(i = 0; i<meses.length;i++){
  console.log(meses[i])
}

//Atividade 2

valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

j = 0
soma = 0

  while(j < valores.length){
    soma = soma + valores[j]
    j++
  }
totalSoma = soma

mediaAritmetica = totalSoma/valores.length

console.log(mediaAritmetica)

//Atividade 3

num = 0
nome = "Thayná"

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]


do{
  procuraNome = nome == nomesComuns[num]
  if(procuraNome == true){
     console.log("É, nome comum :P")
      break
  }
   num++
 
  }
  while(num<nomesComuns.length)

if (procuraNome == false){
console.log("Diferentão, hein? XD")
}