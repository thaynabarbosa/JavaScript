peso = 66
altura = 1.70

imc = peso/(altura**2)

if (imc <= 18.50){
  console.log("Seu imc é ",  imc.toFixed(2))
  console.log("Magreza")
} 
else if (imc <= 24.99){
   console.log("Seu imc é ", imc.toFixed(2))
  console.log("Normal")
}
else if (imc <= 29.99){
   console.log("Seu imc é ",imc.toFixed(2))
  console.log("Sobrepeso")
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}
else if (imc <= 39.99){
   console.log("Seu imc é ", imc.toFixed(2))
  console.log("Obesidade") 
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}
else if (imc >= 40){
   console.log("Seu imc é ",imc.toFixed(2))
  console.log("Obesidade grave")
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
  console.log("É importante procurar um médico para avaliar sua saúde.")
}