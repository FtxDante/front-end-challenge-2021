var coresSeletor = document.querySelector("#cor-seletor");
var coresBackground = document.querySelector(".cor-selecionada");
var body = document.querySelector(".body")
var botaoLista = document.querySelector("#botao-lista");
var navegacao = document.querySelector(".nav");
var corSeletorSalva;
var highlightButton = document.querySelector("#highlight-button");
var controle = 0;
//Código para ativar o highlight quando a pagina carrega, usado para testes.
//document.addEventListener('DOMContentLoaded', aplicaHighlight);

//Menu Mobile

botaoLista.addEventListener("click", chamaNavegacaoMenu);

function chamaNavegacaoMenu(){
    if(controle == 0){
        navegacao.classList.remove("fade-out");
        navegacao.classList.add("mostrar-nav");
        botaoLista.classList.remove("fa-bars");
        botaoLista.classList.add("fa-times");
        controle = 1;    
    }else{
        navegacao.classList.add("fade-out");
        botaoLista.classList.remove("fa-times");
        botaoLista.classList.add("fa-bars");
        setTimeout(function(){
            navegacao.classList.remove("mostrar-nav");
            controle = 0;
            },500) 
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

//Prevenção do valor padrão da tecla TAB
document.querySelector('#code').addEventListener('keydown', function(e) {
    if(e.keyCode === 9) {
        e.preventDefault();
    }    
});

//COMUNIDADE
//CODIGO PARA PEGAR CONTEUDO DO EDITOR E COPIAR:
var conteudoEditor = editorCode;
var editorLink = document.querySelector("#editor-link");
var comunidadeLink = document.querySelector("#comunidade-link");
var containerPaginaPrincipal = document.querySelector(".container-pagina-principal");
var controle = 0;
var comunidade = document.querySelector(".comunidade");

comunidadeLink.addEventListener("click", irParaComunidade);
editorLink.addEventListener("click", irParaEditor);

//IR DO EDITOR PARA A COMUNIDADE E VICE-VERSA
function irParaComunidade(){
    containerPaginaPrincipal.classList.add("fade-out");
    setTimeout(() => {
        containerPaginaPrincipal.classList.remove("fade-out");
        containerPaginaPrincipal.classList.add("ativaDisplay-none");
        comunidade.classList.add("comunidade-aparece");
        controle = 1;   
    }, 1000);
    navegacao.classList.remove("mostrar-nav");
}

function irParaEditor(){
    comunidade.classList.add("fade-out");
    setTimeout(() => {
        comunidade.classList.remove("fade-out");
        containerPaginaPrincipal.classList.remove("ativaDisplay-none");
        comunidade.classList.remove("comunidade-aparece"); 
    }, 1000);
    navegacao.classList.remove("mostrar-nav");
}


