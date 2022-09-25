const btFront = document.querySelector(".proj-titulo-conteu1");
const btBack = document.querySelector(".proj-titulo-conteu2");
const btOutro = document.querySelector(".proj-titulo-conteu3");

window.addEventListener("load", function(){
    document.querySelector(".proj-projetos1").classList.remove('proj-projetos-none');
    document.querySelector(".proj-projetos2").classList.add('proj-projetos-none');
    document.querySelector(".proj-projetos3").classList.add('proj-projetos-none');

    document.querySelector(".proj-titulo-conteu1").classList.remove('desativo');
    document.querySelector(".proj-titulo-conteu2").classList.add("desativo");
    document.querySelector(".proj-titulo-conteu3").classList.add('desativo');
    
});

btFront.addEventListener("click", function(){
    document.querySelector(".proj-projetos1").classList.remove('proj-projetos-none');
    document.querySelector(".proj-projetos2").classList.add('proj-projetos-none');
    document.querySelector(".proj-projetos3").classList.add('proj-projetos-none');

    document.querySelector(".proj-titulo-conteu1").classList.remove('desativo');
    document.querySelector(".proj-titulo-conteu2").classList.add('desativo');
    document.querySelector(".proj-titulo-conteu3").classList.add('desativo');
});

btBack.addEventListener("click", function(){
    document.querySelector(".proj-projetos2").classList.remove('proj-projetos-none');
    document.querySelector(".proj-projetos1").classList.add('proj-projetos-none');
    document.querySelector(".proj-projetos3").classList.add('proj-projetos-none');

    document.querySelector(".proj-titulo-conteu1").classList.add('desativo');
    document.querySelector(".proj-titulo-conteu2").classList.remove('desativo');
    document.querySelector(".proj-titulo-conteu3").classList.add('desativo');
});

btOutro.addEventListener("click", function(){
    document.querySelector(".proj-projetos3").classList.remove('proj-projetos-none');
    document.querySelector(".proj-projetos1").classList.add('proj-projetos-none');
    document.querySelector(".proj-projetos2").classList.add('proj-projetos-none');

    document.querySelector(".proj-titulo-conteu1").classList.add('desativo');
    document.querySelector(".proj-titulo-conteu2").classList.add('desativo');
    document.querySelector(".proj-titulo-conteu3").classList.remove('desativo');
});
