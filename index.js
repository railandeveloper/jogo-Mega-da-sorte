let numeroMega = gerarNumeroAleatorio();
let titulo = document.querySelector('.titulo__principal');
let paragrafo = document.querySelector('.paragrafo');

function verificarChute(){
    let chute = document.querySelector('.container-input').value;
    if( chute == numeroMega) {
        titulo.innerHTML = 'Temos um novo trilionário !!'
        titulo.style.color = '#2294AF'
        paragrafo.innerHTML = 'Meus parabens!!, O valor estara disponivel em sua conta no dia 32 de Dezembro !!'
        paragrafo.style.color = '#FF9E07'
    } else {
        if (chute > numeroMega){
            titulo.innerHTML = 'o numero da Mega é menor'
            paragrafo.innerHTML = 'Tente novamente logo abaixo'
            paragrafo.style.color = '#FF9E07'
        } else {
            titulo.innerHTML = 'o numero da mega é maior'
            paragrafo.innerHTML = 'Tente novamente logo abaixo'
            paragrafo.style.color = '#FF9E07'
        }
    }limparCampo()
}


function limparCampo() {
    chute = document.querySelector('.container-input');
    chute.value = '';//como n foi escrito nada dentro das aspas, o input ficara limpo
}

function gerarNumeroAleatorio() {//funcao para gerar numero aleatorio, nao e necessario passar parametros
    return parseInt(Math.random() * 10 + 1);//retorno de um numero entre 1 e 10
}