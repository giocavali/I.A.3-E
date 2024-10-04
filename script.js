const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "she's crazy."
        },
        {
            texto: "Não",
            afirmação: "ela veio para controlar os seres humanos e vai nos manipular a favor do governo."
        }
        ]
    },
    {
        enunciado: "Você acha a imteligência artificial eficiente?",
        alternativas: [{
            texto: "Sim",
            afirmação: "ela nos ajudar no cotidiano."
        },
        {
            texto:"Não",
            afirmação:"ela causa demência na inteligência humana, por conta da facilitação da busca de informações."
        }
        ]
    },
    {
        enunciado: "Você acha que a inteligência artificial vai acabar com o mundo e a humanidade?",
        alternativas: [{
            texto: "Sim",
            afirmação: "ela vai nos MATAR!!"
        },
        {
            texto: "Não",
            afirmação: "claro que não"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let resposta = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
    return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  ()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta()
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos... ";
}
mostraPergunta();
