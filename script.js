const res = document.querySelector('.black-card > p')

function generate() {
    const blackCard = document.querySelector('.black-card > p')
    const whiteCard = document.querySelectorAll('.white-cards > .card > p')
    blackCard.innerText = generateBlackCard()
    for (let i = 0; i < 4; i++) {
        whiteCard[i].innerText = generateWhiteCards()
    }
}

function winCard(target) {
    res.id = ''
    var indexWhite = whiteCardOptions.indexOf(target.innerText)
    var indexBlack = blackCardOptions.indexOf(res.innerText)
    whiteCardOptions.splice(indexWhite, 1)
    blackCardOptions.splice(indexBlack, 1)
    res.innerHTML += `<br><span id="winner">Carta Vencedora: ${target.innerText}</span>`
    setTimeout(generate, 1500)
}

function show(target) {
    res.id = 'active'
    res.setAttribute('data-content', `${target.innerText}`)
}
function hide() {
    res.id = ''
}

function generateBlackCard() {
    let random = parseInt(Math.random() * blackCardOptions.length)
    if (blackCardOptions[random] == undefined) {
        document.querySelector('#modal-end').showModal()
    } else {
        return blackCardOptions[random]
    }
}

function generateWhiteCards() {
    let random = parseInt(Math.random() * whiteCardOptions.length)
    return whiteCardOptions[random]
}

var whiteCardOptions = [
    'Fome extrema.',
    '72 virgens.',
    'Calcinhas usadas.',
    'Ex Presidente Lula.',
    'Ver a vóvó pelada.',
    'Sangue de Cristo.',
    'Kanye West.',
    'Gravidez na adolescência.',
    'Sexo oral não recíproco.',
    'Danilo Gentili.',
    'Uma mulher muito mais nova.',
    'Fazer sexo pela primeira vez.',
    'Um rifle automático.',
    'A agenda gay.',
    'Puberdade.',
    'Uma punheta triste',
    'Incesto.',
    'Pac-Man bebendo esperma de maneira descontrolada.',
    'AIDS.',
    'Nivaldo.',
    'Cheiro de pessoa velha.',
    'Ainda ser virgem.',
    'Gloryhole.',
    'Autocanibalismo.',
    'O próprio Diabo.',
    'LeBron James.',
    'Minhas bolas na sua cara.',
    'Harry Potter Pornô.',
    'Esperança.',
    'Ser babaca com crianças.',
    'O Big Bang.',
    'O Criacionismo.',
    'Barack Obama.',
    'Monark.',
    'Rainha Elizabeth II.',
    'Bora Bill.',
    'Karol Konká.',
    'O Streamer Casimiro Chupando o Próprio Pau.',
    'No Fap Setember.',
    'Toguro.'
]
var blackCardOptions = [
    'Qual é o prazer secreto do Batman?',
    'Qual é o meu poder secreto?',
    'Papai, por que a mamãe está chorando?',
    'Qual é o melhor amigo da mulher?',
    'O que faz a vida valer a pena?',
    'O que tem ao montes no céu?',
    'Como eu perdi minha virgindade?',
    'O que Jair Bolsonaro não pode gozar sem?',
    'O que nunca falha em animar uma festa?',
    'Durante o sexo, eu gosto de pensar em?',
    'O que tem no banheiro que ninguém quer ir lá?',
    'Um bom sanduíche precisa de?',
    'Que cheiro é esse?',
    'O que acabou com meu último relacionamento?',
    'O que sempre te deixa de pau duro?',
    'O que a Barbie vai ser no seu próximo filme?',
    'Quando eu for presidente, vou criar uma lei para os(as)?',
    'O que eu faria se existessem pokémon na vida real?',
    'O que foi o real culpado pelo atentado de 11 de setembro?',
    'Quem estava pilotando o avião dos Mamonas Assasinas?'
]