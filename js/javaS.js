var coresSeletor = document.querySelector("#cor-seletor");
var coresBackground = document.querySelector(".cor-selecionada");
var controle = 0;
var botaoLista = document.querySelector("#botao-lista");
var navegacao = document.querySelector(".nav");
var body = document.querySelector("body");
var corSeletorSalva;
var highlightButton = document.querySelector("#highlight-button");
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
linguagens = ["javascript","html","java","c#", "json","php"]
document.addEventListener('DOMContentLoaded', aplicaHighlight);
highlightButton.addEventListener('click', aplicaHighlight);

function aplicaHighlight(){

    hljs.highlightAll();
    
}


