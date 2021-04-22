var agora = new Date() // criando uma variavel para receber a data.
var hora = agora.getHours() // pegando hora do computador que estiver rodando o script
console.log(`Agora são exatamente ${hora} Horas`) // mostrando a hora 
if(hora >= 6 && hora <= 11 ){
    console.log('Bom dia Pessoal')
}else if (hora >= 12 && hora < 18){
    console.log('Boa tarde Pessoal') 
}else if (hora >= 19 && hora < 23){
    console.log('Boa noite Pessoal')

}else{
    console.log('Boa madrugada Pessoal')
}