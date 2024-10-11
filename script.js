const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você acha que ENEM é coisa de louco?",
        alternativas: [{
            texto: "Sim, só louco para pensar nisso.",
            afirmação: "Mataria o mesário se fosse necessário."
        },
        {
            texto: "Não, ele nos ajuda.",
            afirmação: "Nos dá oportunidades para engressar na faculdade."
        }
        ]
    },
    {
        enunciado: "Que curso você faria??",
        alternativas: [{
            texto: "Possivelmente exatas",
            afirmação: "Para calcualr o ângulo, para dar um tiro perfeito na cabeça do mesário."
        },
        {
            texto:"Provavelmente humanas",
            afirmação:"Curto um baseaso haaaaaaa!!"
        }
        ]
    },
    {
        enunciado: "Está preparado(a)",
        alternativas: [{
            texto: "Sim.",
            afirmação: "Estudei muito para isso."
        },
        {
            texto: "Não sei",
            afirmação: "Acho que vou matar o mesário."
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
