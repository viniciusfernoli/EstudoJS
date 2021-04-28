var idade = 12

console.log(`Você tem ${idade} anos e seu voto é: `) // escrever no terminal node.js
if(idade < 16){
    console.log('Não vota')
}else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
}   else {
        console.log('Voto Obrigatório')

}
