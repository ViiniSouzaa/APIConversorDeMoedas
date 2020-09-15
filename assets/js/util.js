document.getElementById("btn_login")
    .addEventListener("click", function(){      
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("tela_inicial").style.display = "none";
        document.getElementById("login").style.display = "block";
    });

document.getElementById("btn_cadastro")
    .addEventListener("click", function (){
        document.getElementById("cadastro").style.display = "block";
        document.getElementById("tela_inicial").style.display = "none";
        document.getElementById("login").style.display = "none";
    });

document.getElementById("cadastrar")
    .addEventListener("click", function (){
        document.getElementById("cadastro").style.display = "block";
        document.getElementById("tela_inicial").style.display = "none";
        document.getElementById("login").style.display = "none";
    });

var email_valido = false;
var senha_valida = false;
var senha_igual = false;

function validaEmail(email){
    var spanEmail = document.getElementById('span-email');
    if(!email){
        email_valido = false;
        spanEmail.style.display = "block";
        spanEmail.innerHTML = "Digite um email válido!";
    }else {
        spanEmail.style.display = "none";
        email_valido = true;
    }
}

function tiraSpanEmail(){
    var spanEmail = document.getElementById('span-email');
        spanEmail.style.display = "none";
}

var senha_nao_confirmada;
function validaSenha(senha){
    var spanSenha = document.getElementById('span-senha1');
    senha_nao_confirmada = senha;
    if(senha.length < 8 && senha.length > 0){
        senha_valida = false;
        spanSenha.style.display = "block";
        spanSenha.innerHTML = "Digite uma senha válida!";
    }else{
        senha_valida = true;
        spanSenha.style.display = "none";
        spanSenha.innerHTML = "";
    }
}

function senhaIgual(){
    var csenha = document.getElementById('pass2').value;
    var spanSenha2 =  document.getElementById('span-senha2');

    if(senha_nao_confirmada === csenha){
        senha_igual = true;
        spanSenha2.style.display = "none";
        spanSenha2.innerHTML = "";        
    }else {
        senha_igual = false;
        spanSenha2.style.display = "block";
        spanSenha2.innerHTML = "As senhas não coincidem!";
    }
}