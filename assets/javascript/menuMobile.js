window.addEventListener("load", function(){
    // pegando o cabecalho
    let cabecalho = document.querySelector('.cabecalho');
    document.body.style.setProperty('--alturaMenu',cabecalho.offsetHeight + 'px');
})

window.addEventListener("scroll", function(){
    // pegando o cabecalho
    let cabecalho = document.querySelector('.cabecalho');
    //imprimindo no console altura do cabecalho
    // console.log(element.offsetHeight);
    //pegando o valor da variavel do css
    // let value = getComputedStyle(document.documentElement).getPropertyValue('--alturaMenu'); 
    //alterando o valor da variavel do css
    document.body.style.setProperty('--alturaMenu',cabecalho.offsetHeight + 'px');
})

let menu = document.querySelector('.menu');
var verificador = false;
menu.onclick = function(){
    let nome = document.querySelector('.nome-menu');
    if (!verificador) {
        document.querySelector('.menu-mobile').classList.remove('nao-mostra-fundo');
        verificador = true;
        nome.innerHTML = 'Fechar';
        document.querySelector('.traco-1').classList.add('girar-traco-1');
        document.querySelector('.traco-2').classList.add('sem-traco');
        document.querySelector('.traco-3').classList.add('girar-traco-3');
        nome.classList.add('cor-fechar'); 
    }
    else {
        document.querySelector('.menu-mobile').classList.add('nao-mostra-fundo');
        verificador = false;
        nome.innerHTML = 'Menu';
        document.querySelector('.traco-1').classList.remove('girar-traco-1');
        document.querySelector('.traco-2').classList.remove('sem-traco');
        document.querySelector('.traco-3').classList.remove('girar-traco-3');
        nome.classList.remove('cor-fechar');
    }
}

function sumir (){
    let nome = document.querySelector('.nome-menu');
    document.querySelector('.menu-mobile').classList.add('nao-mostra-fundo');
    nome.innerHTML = 'Menu';
    document.querySelector('.traco-1').classList.remove('girar-traco-1');
    document.querySelector('.traco-2').classList.remove('sem-traco');
    document.querySelector('.traco-3').classList.remove('girar-traco-3');
    nome.classList.remove('cor-fechar');
    verificador = false;
}

document.querySelector('.a-menu1').onclick = sumir;
document.querySelector('.a-menu2').onclick = sumir;
document.querySelector('.a-menu3').onclick = sumir;
document.querySelector('.a-menu4').onclick = sumir;
document.querySelector('.a-menu5').onclick = sumir;
document.querySelector('.a-menu6').onclick = sumir;

document.documentElement.onclick = function(event){
    let menuzao = document.querySelector('.menu-mobile');
    let nome = document.querySelector('.nome-menu');
    let menu = document.querySelector('.menu');
    let tracos = document.querySelector('.tracos-menu');

    if (event.target !== menuzao && event.target !== menu && event.target !== nome && event.target !== tracos){
        let nome = document.querySelector('.nome-menu');
        document.querySelector('.menu-mobile').classList.add('nao-mostra-fundo');
        nome.innerHTML = 'Menu';
        document.querySelector('.traco-1').classList.remove('girar-traco-1');
        document.querySelector('.traco-2').classList.remove('sem-traco');
        document.querySelector('.traco-3').classList.remove('girar-traco-3');
        nome.classList.remove('cor-fechar');
        verificador = false;
    }
}

