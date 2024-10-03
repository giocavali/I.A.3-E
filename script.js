const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const pergunta = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você acha a imteligência artificial eficiente?",
        alternativa: [{
            texto:"Sim",
            afirmação:"porque ela iniciou a nos ajudar no cotidiano."
        
    },
    {
        texto:"Não",
        afirmação:"pois ela vem causando demência na inteligência humana, por conta da facilidade de se encontrar informações."
    },
    ]
    {
        enunciado: "Você gosta da inteligência artificial?",
        alternativa: [{
            texto:"Sim",
            afirmação:"porque ela é incrivivel."
        
    },
    {
        texto:"Não",
        afirmação:"ela veio para controlar os seres humanos e vai nos manipular a favor do governo."
    }
    ]
    },
    {
        enunciado: "Você acha que a inteligência artificial vai acabar com o mundo e a humanidade?",
        alternativa: [{
            texto:"Sim",
            afirmação:"com certeza, pois é uma coisa que o ser humano não pode controlar."
    },
    {
        texto:"Não",
        afirmação:"pois ela vai nos ajudar a crescer no universo."
    }
    ]
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
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            posicao++;
        });
        caixaAlternativa.appendChild(botaoAlternativa);
    }
}