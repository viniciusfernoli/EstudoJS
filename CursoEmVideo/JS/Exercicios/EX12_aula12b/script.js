function verificar(){
    var data = new Date() // faz a variavel 'data', receber datas em geral
    var ano = data.getFullYear() // a variavel ano, vai pegar a variavel data e pegar o ano completo do computador do usuário, '2021' por exemplo.
    var formularioano = window.document.getElementById('txtnasc') // cria uma variavel para pegar o ano que o usuário digitar no input
    var res = window.document.getElementById('res') // cria uma variavel para pegar a div 'res'

    if(formularioano.value.length == 0 || Number(formularioano.value > ano)){ //caso o usuário não digitar o ano ou o usuário digitar um ano maior que o ano atual do computador
        window.alert('ERRO!! Digite algum número válido.') // vai mostrar o alert
    }else{
        var formulariosex = window.document.getElementsByName('radsex') // pega os dois input, com os nomes iguais e joga na variável
        // input [0] = masculino
        //input [1] = feminino
        var idade = ano - Number(formularioano.value) // o ano atual - o ano que o usuário digitar
        var genero = '' // criei uma variavel vazia
        //coloca a foto dinamicamente
        var img = document.createElement('img') // cria uma variavel, para receber um elemento 'img', vai criar uma tag img para mim
        img.setAttribute('id', 'foto') // modifica o elemento IMG criado acima, e adiciona um IF a ele
    //o elemento 'img' que criei.adicionar um novo ou editar o atributo ao elemento ('atributo ID' para 'foto')-> a 


        if (formulariosex[0].checked){ // se o input marcado (checked), for o [0](masculino) é sinal que vai ser masculino
            genero = 'Homem' // Genero vai receber homem como escrito
            if(idade >= 0 && idade < 10){ // se a idade for maior que 0 e a idade for menor que 10
                //criança m
                img.setAttribute('src', 'm-bebe.png') // mostra a imagem bebe, adicionou um atributo ao elemento 'IMG', adicionou um source e colocou o nome da imagem depois
            }else if (idade < 26){
                //jovem m
                img.setAttribute('src', 'm-jovem.png')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'm-adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        }else if (formulariosex[1].checked){//se o input marcado (checked), for o [1](feminino) é sinal que vai ser mulher
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança f
                img.setAttribute('src','f-bebe.png')
            }else if(idade < 26){
                //jovem f
                img.setAttribute('src','f-jovem.png')
            }else if(idade < 60){
                //adulta
                img.setAttribute('src','f-adulta.png')
            }else{
                //idosa
                img.setAttribute('src','f-idoso.png')
            }
        }
        res.style.textAlign = 'center' // centralizar a div com id 'res' utilizando JS
        res.innerHTML = `você é ${genero} com ${idade} anos`
        res.appendChild(img) //adiciona um elemento, será adicionado para exibir a foto ao final da página.

    }
}

function limpar(){
    fano = window.document.querySelector('input#txtnasc')
    res = window.document.querySelector('div#res')
    fano.value = ''
    res.innerHTML = '<strong>Apagado com Sucesso</strong>'
}
