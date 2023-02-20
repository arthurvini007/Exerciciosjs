let inputNome = prompt('Digite o seu Nome:')

let inputIdade = prompt('Digite sua idade:')

let idade = parseInt(inputIdade)

let maiorOuMenor

if(idade >= 18){
    maiorOuMenor = 'Maior'
}else if (idade < 18){
    maiorOuMenor = 'Menor'
}
let mensagemPersonalizada = ''

if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
  mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
}

let mensagem = `Olá ${inputNome}, você é ${maiorOuMenor} de idade! ${mensagemPersonalizada}`

document.write(mensagem)
