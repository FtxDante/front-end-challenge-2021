var coresSeletor = document.querySelector("#cor-seletor");
var coresBackground = document.querySelector(".cor-selecionada");

coresSeletor.addEventListener("input", function(event){
    coresBackground.style.backgroundColor = coresSeletor.value;
    //console.log(cores.value);
})
var controle = 0;
var botaoLista = document.querySelector("#botao-lista");
var navegacao = document.querySelector(".nav");

//Menu Mobile
botaoLista.addEventListener("click", function(){
    if(controle == 0){
        navegacao.classList.add("nav-some");
        controle = 1;
    }else{
        navegacao.classList.remove("nav-some");
        controle = 0;
    }
    console.log(controle);
    
})


