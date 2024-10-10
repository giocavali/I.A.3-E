const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Porque ela revoluciona o mundo."
        },
        {
            texto: "Não",
            afirmação: "Ela veio para dominar o mundo!!"
        }
        ]
    },
    {
        enunciado: "A inteligência artificial vai no matar?!",
        alternativas: [{
            texto: "Possivelmente",
            afirmação: "Toma cuidado!!"
        },
        {
            texto:"Jamais...Mas",
            afirmação:"Nunca de as costas a ela."
        }
        ]
    },
    {
        enunciado: "Você usa a IA no cotidiano?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Não sou capaz de fazer nada sozinho."
        },
        {
            texto: "Não",
            afirmação: "Acho pura bestera essa coisa de IA."
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
