// pegando os botoes do html
const botao = document.getElementById("botao");
const botaoOk = document.getElementById("id_botao_ok");

//funcao para validar 
function validacao (){
    //removendo class dos elementos assim que clica no botao
    document.getElementById("feedback").classList.remove("visi_sucesso");
    document.getElementById("id_botao_ok").classList.remove("botao_ok");

    //pegando os valores dos input 
    let email = document.getElementById("email").value;
    let msg = document.getElementById("mensagem").value;
    let nome = document.getElementById("name").value;

    //verificando se tem mais de um arroba
    let temArroba = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@'){
            temArroba += 1;
        }
    }
    
    //verificando se tem espaço    
    let temEspaco;
    if (email.includes(' ')){
        temEspaco = true;
    } else {
        temEspaco = false;
    }

    //verificando se tem algum dos caracteres especiais a baixo
    const caractEsp = '!#$%&*()}{<>:;?/+=,`~^|"¨_°ª§º/¬-' + "'";
    let temCaractEspc = 0;

    for (let i = 0; i < email.length; i++){
        if (caractEsp.includes(email[i])){
            temCaractEspc += 1;
        }
    }
    
    //verificando se tem algo no input do nome
    if (nome == false){
        document.getElementById("feedback").classList.add("visi");
        const feedback = "Erro no envio: Insira seu nome"; 
        document.getElementById("feedback").innerHTML = feedback;
        document.getElementById("id_botao_ok").classList.add
        ("botao_ok_erro");  
        return false;
    }
    
    //verificando as condiçoes para ser valido ou nao
    if (email.includes('@')
        && email.includes('.')
        && email[email.length-1] !== '@'
        && email[0] !== '@'
        && email[0] !== '.'
        && email[email.length-1] !== '.'
        && email[email.indexOf('@') + 1] !== '.'
        && email[email.indexOf('@') - 1] !== '.'
        && temArroba === 1
        && !temEspaco
        && temCaractEspc === 0 ) {
        
        //se o email for valido, agora preciso saber se tem mensagem
        if (msg == false){
            document.getElementById("feedback").classList.add("visi");
            const feedback = "Erro no envio: Insira uma mensagem"; 
            document.getElementById("feedback").innerHTML = feedback;
            document.getElementById("id_botao_ok").classList.add
            ("botao_ok_erro");  
            
            return false;
        }
        var user = document.getElementById('name').value;
        sessionStorage.nome = user;       
    }

    else { 
        //se o email nao for valido adiciono essas classes 
        document.getElementById("feedback").classList.add("visi");
        const feedback = "Erro no envio: Endereço de email inválido"; 
        document.getElementById("feedback").innerHTML = feedback; 

        document.getElementById("id_botao_ok").classList.add("botao_ok_erro");
    }
}

//funcao para remover o texto ao clicar em ok
function removeOK(event){
    event.preventDefault();

    document.getElementById("feedback").classList.remove("visi_sucesso");
    document.getElementById("feedback").classList.remove("visi");
    document.getElementById("id_botao_ok").classList.remove("botao_ok");
    document.getElementById("id_botao_ok").classList.remove("botao_ok_erro");

    if (document.getElementById("name").value == false){
        document.getElementById("name").value = '';
    }

    if (document.getElementById("email").value == false){
        document.getElementById("email").value = '';
    }

    if (document.getElementById("mensagem").value == false){
        document.getElementById("mensagem").value = '';
    }

}

botao.onclick = validacao;
botaoOk.onclick = removeOK;