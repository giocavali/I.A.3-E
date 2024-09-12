const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const pergunta = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você acha a imteligência artificial eficiente?",
        alternativa: ["Sim","Não"]
    },
    {
        enunciado: "Você gosta da inteligência artificial?",
        alternativa: ["Sim","Não"]
    },
    {
        enunciado: "Você acha que a inteligência artificial vai acabar com o mundo e a humanidade?",
        alternativa: ["Sim","Não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao].enunciado;
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostrarAlternativas(){
    for
}