function carregar(){ // Uma function para quando carregar a página
    var mensagem = window.document.getElementById('msg') // cria uma variavel, e pega o ID do HTML e joga dentro da variavel 
    var imagem = window.document.getElementById('img') // cria a variavel, e pega o ID da IMG e joga dentro da variavel
    var mensagem2 = window.document.getElementById('bdia') //pega a div com ID 'bdia' e joga na variavel 'mensagem2'
    var data = new Date() // cria uma variável que recebe data
    var atual = data.getHours() // cria uma variavel que recebe as horas
    var minutos = data.getMinutes() // cria uma variavel que recebe os minutos


    if(atual >=0 && atual <= 11){ // se a hora atual for maior que 0 e a hora atual for menor que 11
        //vai exibir bom dia
        imagem.src = 'manha.png' // pega a imagem de bom dia
        mensagem.innerHTML = `Agora são ${atual} Horas e ${minutos} Minutos.` //coloca uma mensagem na div 'msg'
        document.body.style.background = '#e2cd9f' // muda o background da div utilizando javascript
        mensagem2.innerHTML = '<strong> BOM DIA!! </strong>' // coloca uma mensagem de bom dia na div 'bdia'

    }else if(atual >= 12 && atual <= 18){ // se a hora atual for maior que 12 e a hora atual for menor que 18
        //vai mostrar boa tarde
        imagem.src = `tarde.png`// mostra a imagem de com o ambiente tarde
        mensagem.innerHTML = `Agora são ${atual} Horas e ${minutos} Minutos.`//coloca uma mensagem na div 'msg'
        document.body.style.background = '#b9846f' // muda o background da div utilizando javascript
        mensagem2.innerHTML = '<strong> BOA TARDE!! </strong>'// coloca uma mensagem de boa tarde na div 'bdia'

    }else{ // se a hora atual não for nenhum das acima, então vai ser noite
        //vai mostrar boa noite
        imagem.src = 'noite.png' // mostra a imagem de com o ambiente noite
        mensagem.innerHTML = `Agora são ${atual} Horas e ${minutos} Minutos.`//coloca uma mensagem na div 'msg'
        document.body.style.background = '#515154'// muda o background da div utilizando javascript
        mensagem2.innerHTML = '<strong> BOA NOITE!! </strong>'// coloca uma mensagem de boa noite na div 'bdia'
    }
}