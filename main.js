/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-mario': 'Os jogos online foram meu primeiro mergulho profundo no mundo da computação.',
    'interesse-serie': 'A computação me encanta por transformar ideias em realidade com um toque de teclas.',
    'interesse-pokemon': 'Pratico Capoeira desde 4 anos de idade, a Capoeira é meu porto seguro.',
    'interesse-aviao': 'O boxe me fascina pela combinação única de força, estratégia e superação pessoal.',
    'interesse-passaro': 'Hiking me conecta à natureza, fortalece corpo e mente, e renova a alma.!'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}
