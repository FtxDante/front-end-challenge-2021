var coresSeletor = document.querySelector("#cor-seletor");
var coresBackground = document.querySelector(".cor-selecionada");
var controle = 0;
var botaoLista = document.querySelector("#botao-lista");
var navegacao = document.querySelector(".nav");
var body = document.querySelector("body");
var corSeletorSalva;

//Menu Mobile
botaoLista.addEventListener("click", navegacaoMenu);

function navegacaoMenu(){
    if(controle == 0){
        navegacao.classList.add("nav-some");
        controle = 1;
    }else{
        navegacao.classList.remove("nav-some");
        controle = 0;
    }
}

coresSeletor.addEventListener("input", corEditor);
function corEditor(event){
    coresBackground.style.backgroundColor = coresSeletor.value;
    corSeletorSalva = coresSeletor.value;

    //console.log(cores.value);
}


