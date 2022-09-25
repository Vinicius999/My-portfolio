let alturaInico = document.getElementById("id-inicio").offsetTop - 200;

let alturaQSou = document.getElementById("id-qsou").offsetTop - 260;

let alturaFormacoes = document.getElementById("id-formacoes").offsetTop -260;

let alturaHabilidades = document.getElementById("id-habilidades").offsetTop - 260;

let alturaProjetos = document.getElementById("id-projetos").offsetTop - 200;

let alturaContato = document.getElementById("id-contato").offsetTop - 400;

window.addEventListener("scroll", function(){

    const cabecalho = this.document.querySelector(".cabecalho");

    cabecalho.classList.toggle("novo-cabecalho", this.window.scrollY > 100);
    
    const botaoCabeca = this.document.querySelector(".cabecalho-botao");
    botaoCabeca.classList.toggle("novo-cabecalho-botao", this.window.scrollY > 300);


    if (this.window.scrollY < alturaQSou){
        document.querySelector('.ini').classList.add("cor-link-cab");
        document.querySelector('.traco-ini').classList.add("traco-visi");
        
        document.querySelector('.qs').classList.remove("cor-link-cab");   
        document.querySelector('.traco-qs').classList.remove("traco-visi");  
                
        document.querySelector('.fm').classList.remove("cor-link-cab");  
        document.querySelector('.traco-form').classList.remove("traco-visi");
        
        document.querySelector('.hab').classList.remove("cor-link-cab")   
        document.querySelector('.traco-hab').classList.remove("traco-visi");
        
        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.traco-proj').classList.remove("traco-visi"); 
        
        botaoCabeca.classList.remove("cabecalho-botao-contato");
        document.querySelector('.traco-entrar').classList.remove("traco-visi")
        botaoCabeca.classList.add("botao-cab-hover");


        document.querySelector('.ini').classList.remove("hover-a");
        document.querySelector('.qs').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.hab').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
        
    }
    
    if (this.window.scrollY > alturaQSou && this.window.scrollY < alturaFormacoes){
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.traco-ini').classList.remove("traco-visi");
        
        document.querySelector('.qs').classList.add("cor-link-cab")   
        document.querySelector('.traco-qs').classList.add("traco-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab")   
        document.querySelector('.traco-form').classList.remove("traco-visi");  

        document.querySelector('.hab').classList.remove("cor-link-cab")   
        document.querySelector('.traco-hab').classList.remove("traco-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.traco-proj').classList.remove("traco-visi");

        botaoCabeca.classList.remove("cabecalho-botao-contato");
        document.querySelector('.traco-entrar').classList.remove("traco-visi")
        botaoCabeca.classList.add("botao-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.qs').classList.remove("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.hab').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
    }

    if (this.window.scrollY > alturaFormacoes && this.window.scrollY < alturaHabilidades){
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.traco-ini').classList.remove("traco-visi");
        
        document.querySelector('.qs').classList.remove("cor-link-cab"); 
        document.querySelector('.traco-qs').classList.remove("traco-visi");

        document.querySelector('.fm').classList.add("cor-link-cab");
        document.querySelector('.traco-form').classList.add("traco-visi");  

        document.querySelector('.hab').classList.remove("cor-link-cab")   
        document.querySelector('.traco-hab').classList.remove("traco-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.traco-proj').classList.remove("traco-visi");

        botaoCabeca.classList.remove("cabecalho-botao-contato");
        document.querySelector('.traco-entrar').classList.remove("traco-visi")
        botaoCabeca.classList.add("botao-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.qs').classList.add("hover-a");
        document.querySelector('.fm').classList.remove("hover-a");
        document.querySelector('.hab').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
    }

    if (this.window.scrollY > alturaHabilidades && this.window.scrollY < alturaProjetos) {
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.traco-ini').classList.remove("traco-visi");
        
        document.querySelector('.qs').classList.remove("cor-link-cab"); 
        document.querySelector('.traco-qs').classList.remove("traco-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab");
        document.querySelector('.traco-form').classList.remove("traco-visi");  

        document.querySelector('.hab').classList.add("cor-link-cab")   
        document.querySelector('.traco-hab').classList.add("traco-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.traco-proj').classList.remove("traco-visi");

        botaoCabeca.classList.remove("cabecalho-botao-contato");
        document.querySelector('.traco-entrar').classList.remove("traco-visi")
        botaoCabeca.classList.add("botao-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.qs').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.hab').classList.remove("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
    }

    if (this.window.scrollY > alturaProjetos && this.window.scrollY < alturaContato) {
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.traco-ini').classList.remove("traco-visi");
        
        document.querySelector('.qs').classList.remove("cor-link-cab"); 
        document.querySelector('.traco-qs').classList.remove("traco-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab");
        document.querySelector('.traco-form').classList.remove("traco-visi");  

        document.querySelector('.hab').classList.remove("cor-link-cab")   
        document.querySelector('.traco-hab').classList.remove("traco-visi");  

        document.querySelector('.proj').classList.add("cor-link-cab")   
        document.querySelector('.traco-proj').classList.add("traco-visi");

        botaoCabeca.classList.remove("cabecalho-botao-contato");
        document.querySelector('.traco-entrar').classList.remove("traco-visi")
        botaoCabeca.classList.add("botao-cab-hover"); 

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.qs').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.hab').classList.add("hover-a");
        document.querySelector('.proj').classList.remove("hover-a"); 
    }

    if (this.window.scrollY >= alturaContato) {
    
        document.querySelector('.ini').classList.remove("cor-link-cab");
        document.querySelector('.traco-ini').classList.remove("traco-visi");
        
        document.querySelector('.qs').classList.remove("cor-link-cab"); 
        document.querySelector('.traco-qs').classList.remove("traco-visi");

        document.querySelector('.fm').classList.remove("cor-link-cab");
        document.querySelector('.traco-form').classList.remove("traco-visi");  

        document.querySelector('.hab').classList.remove("cor-link-cab")   
        document.querySelector('.traco-hab').classList.remove("traco-visi");  

        document.querySelector('.proj').classList.remove("cor-link-cab")   
        document.querySelector('.traco-proj').classList.remove("traco-visi");

        botaoCabeca.classList.add("cabecalho-botao-contato");
        document.querySelector('.traco-entrar').classList.add("traco-visi")
        
        botaoCabeca.classList.remove("botao-cab-hover");

        document.querySelector('.ini').classList.add("hover-a");
        document.querySelector('.qs').classList.add("hover-a");
        document.querySelector('.fm').classList.add("hover-a");
        document.querySelector('.hab').classList.add("hover-a");
        document.querySelector('.proj').classList.add("hover-a"); 
        
    }
       
        
});

