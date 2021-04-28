var agora = new Date()
var diaSem = agora.getDay()
/* 
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    quinta = 4
    sexta = 5
    sábado = 6

*/
switch(diaSem){ // a expressão vai ser o dia da semana
    case 0:// se o resultado da expressão for 0, então  vai mostrar domingo na tela.
        console.log(`O dia da semana é Domingo`)
    break // obrigatório em todos os casos, server para não continuar o comando.

    case 1:// se o resultado da expressão for 1, então  vai mostrar segunda na tela.
        console.log(`O dia da semana é Segunda`)
    break// obrigatório em todos os casos, server para não continuar o comando

    case 2:// se o resultado da expressão for 2, então  vai mostrar terça na tela.
        console.log(`O dia da semana é Terça`)
    break// obrigatório em todos os casos"," server para não continuar o comando

    case 3:// se o resultado da expressão for 3, então  vai mostrar quarta na tela.
        console.log(`O dia da semana é Quarta`)
    break// obrigatório em todos os casos, server para não continuar o comando
    
    case 4:// se o resultado da expressão for 4, então  vai mostrar quinta na tela.
        console.log(`O dia da semana é Quinta`)
    break// obrigatório em todos os casos, server para não continuar o comando

    case 5:// se o resultado da expressão for 5, então  vai mostrar sexta na tela.
        console.log(`O dia da semana é Sexta`)
    break// obrigatório em todos os casos, server para não continuar o comando

    case 6:// se o resultado da expressão for 6, então  vai mostrar sábado na tela.
        console.log(`O dia da semana é Sábado`)
    break// obrigatório em todos os casos, server para não continuar o comando
    
    default:// se o resultado da expressão for nenhum dos acima, então o console.log.
        console.log(`ERRO! VOCÊ TA NA MATRIX`)
    break// obrigatório em todos os casos, server para não continuar o comando
  
}