/*passo 1 dar um jeito de pegar o elemento html dos botoes*/
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll ('.imagem');

/*passo 2 dar um jeito de identificar o clique do usuario no botao */
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {



        /* Passo 3 desmarcar o botao selecionado anterior*/
        desativarBotaoSelecionado();

        /* passo 4 marcar o botao clicado como se estivesse selecionada */
        selecionarBotaoCarrosel(botao);

        /* PAsSO 5 esconder a imagem ATIVA de fundo anterior*/
        esconderImagemAtiva();

        /* Passo 6 - mostrar a nova imagem de fundo correspondente ao botao clicado */
        mostarImagemDeFundo(indice);



    })
})

function mostarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
