var coresSeletor = document.querySelector("#cor-seletor");
var coresBackground = document.querySelector(".cor-selecionada");
var controle = 0;
var botaoLista = document.querySelector("#botao-lista");
var navegacao = document.querySelector(".nav");
var body = document.querySelector("body");
var corSeletorSalva;
var highlightButton = document.querySelector("#highlight-button");

document.addEventListener('DOMContentLoaded', aplicaHighlight);

//Menu Mobile
botaoLista.addEventListener("click", navegacaoMenu);

function navegacaoMenu(){
    if(controle == 0){

        navegacao.classList.toggle("nav-some");
        controle = 1;
    }else{
        navegacao.classList.toggle("nav-some");
        controle = 0;
    }
}

//Cor de fundo
coresSeletor.addEventListener("input", corEditor);
function corEditor(event){
    coresBackground.style.backgroundColor = coresSeletor.value;
    corSeletorSalva = coresSeletor.value;

    //console.log(cores.value);
}

//Aplicador de highlight
var linguagens = ["javascript","html","java","c#", "json","php","xml","csharp"]
var editorCode = document.querySelector("#code");
highlightButton.addEventListener('click', aplicaHighlight);

function aplicaHighlight(){
    removeClassHighlightAnterior();
    var campoDeSelecaoLinguagem  = document.querySelector("#campo-selecao");
    editorCode.classList.add(campoDeSelecaoLinguagem.value);
    console.log(campoDeSelecaoLinguagem.value);
    hljs.highlightAll();
}

function removeClassHighlightAnterior(){
    var controle = 0;
     while(controle <= linguagens.length){
    editorCode.classList.remove(linguagens[controle]);
    controle++
    }
}


//CODIGO PARA PEGAR CONTEUDO DO EDITOR E COPIAR:
//var conteudoEditor = editorCode;
//editorCode.innerHTML += conteudoEditor.innerHTML
