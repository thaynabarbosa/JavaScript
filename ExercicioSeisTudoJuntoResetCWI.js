function condicaoDeAposentadoria(dados){
  
  idades = [69, 66, 58,61, 60, 64, 59, 55]
  temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29]
  
  return  (((idades[dados] >= 65) || (temposDeTrabalho[dados]>=30)) || ((idades[dados] >=60) && (temposDeTrabalho[dados]>=25)))
   
}

function verificarAposentadoria(nome){

    colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
 
    i = 0
  
    do{
      procuraNome = nome == colaboradores[i]
        if (procuraNome == true){
          validacao = condicaoDeAposentadoria(i)
            if(validacao == true){
              console.log("Parabéns, já pode sair de férias eternas :)")
              } else console.log("Infelizmente para você, ainda falta um tempo :(")
          break
        }
      i++
              
      } while(i<colaboradores.length)
      
  if(procuraNome == false){
        console.log("Colaborador inválido :|")
      }
      
      } 
        


verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)