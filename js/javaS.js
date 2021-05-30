var coresSeletor = document.querySelector("#cor-seletor");
var coresBackground = document.querySelector(".cor-selecionada");
var body = document.querySelector(".body")
var botaoLista = document.querySelector("#botao-lista");
var navegacao = document.querySelector(".nav");
var corSeletorSalva;
var highlightButton = document.querySelector("#highlight-button");

//Código para ativar o highlight quando a pagina carrega, usado para testes.
//document.addEventListener('DOMContentLoaded', aplicaHighlight);

//Menu Mobile
botaoLista.addEventListener("click", navegacaoMenu);

function navegacaoMenu(){
    var controle = 0;
    if(controle == 0){

        navegacao.classList.toggle("mostrar-nav");
        controle = 1;
    }else{
        navegacao.classList.toggle("mostrar-nav");
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

//Aplicador de HIGHLIGHT
var linguagens = ["javascript","html","java","c#", "json","php","xml","csharp"]
var editorCode = document.querySelector("#code");
highlightButton.addEventListener('click', aplicaHighlight);

function aplicaHighlight(){
    removeClassHighlightAnterior();
    var campoDeSelecaoLinguagem  = document.querySelector("#campo-selecao");
    editorCode.classList.add(campoDeSelecaoLinguagem.value);
    console.log(campoDeSelecaoLinguagem.value);
    hljs.highlightAll();
    document.querySelector("#salvo1").innerHTML += conteudoEditor.innerHTML
}

function removeClassHighlightAnterior(){
    var controle = 0;
     while(controle <= linguagens.length){
    editorCode.classList.remove(linguagens[controle]);
    controle++
    }
}

//COMUNIDADE
//CODIGO PARA PEGAR CONTEUDO DO EDITOR E COPIAR:
var conteudoEditor = editorCode;
var editorLink = document.querySelector("#editor-link");
var comunidadeLink = document.querySelector("#comunidade-link");
var flexContainer = document.querySelector(".container-spa")

comunidadeLink.addEventListener("click", comunidadeSPA);
var controle = 0;
function comunidadeSPA(){
    
    if(controle == 0){

        flexContainer.classList.add("display-none");
        controle = 1;
    }else{
        flexContainer.classList.remove("display-none");
        controle = 0;
    }
}

//Prevenção do valor padrão da tecla TAB
document.querySelector('#code').addEventListener('keydown', function(e) {
    if(e.keyCode === 9) {
        e.preventDefault();
    }    
});