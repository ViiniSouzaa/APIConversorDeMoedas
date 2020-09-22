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

document.getElementById('btn-cadastrar')
    .addEventListener("click", function(){
        console.log(email_valido,senha_valida,senha_igual);
        if(!email_valido || !senha_valida || !senha_igual){
            alert("Tem algo errado com seus Dados, verefique e tente novamente!");
        }else{
            var login = new XMLHttpRequest();
            login.open("POST", "https://reqres.in/api/login",true);
            login.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            login.send(JSON.stringify({ "email": "eve.holt@reqres.in", "password": "pistol"}));

            login.onload = function (){
                console.log(JSON.parse(login.responseText).token);
                localStorage.setItem('token', JSON.parse(login.responseText).token)
                localStorage.setItem('email', email_validado);
                localStorage.setItem('senha', senha_nao_confirmada);
            }
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("login").style.display = "block";
            alert("Cadastro feito com sucesso!");
        }
    });

document.getElementById('logar')
    .addEventListener("click", function(){
        var login = new XMLHttpRequest();
            login.open("POST", "https://reqres.in/api/login",true);
            login.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            login.send(JSON.stringify({ "email": "eve.holt@reqres.in", "password": "pistol"}));

            login.onload = function (){
                if(JSON.parse(login.responseText).token == localStorage.getItem('token')){
                    chamaSegundaTela();
                }
            }
    });

function chamaSegundaTela(){
    var usuario = document.getElementById('username').value;
    var senha =  document.getElementById('pass').value;
    
    console.log("user = " + usuario + " senha = " + senha);

    if(usuario == localStorage.getItem('email') && senha == localStorage.getItem('senha')){
        // document.getElementById('pagina').style.display = 'block';
        location.href = 'index2.html';
    }else{
        alert("Usuario ou senha incorretos!");
    }
}

var email_valido = false;
var senha_valida = false;
var senha_igual = false;

var email_validado;
function validaEmail(email, email_digitado){
    var spanEmail = document.getElementById('span-email');
    if(!email){
        email_valido = false;
        spanEmail.style.display = "block";
        spanEmail.innerHTML = "Digite um email válido!";
    }else {
        spanEmail.style.display = "none";
        email_valido = true;
        email_validado = email_digitado;
    }
}

function tiraSpanEmail(){
    var spanEmail = document.getElementById('span-email');
        spanEmail.style.display = "none";
}

var senha_nao_confirmada;
function validaSenha(senha){
    var spanSenha = document.getElementById('span-senha1');
    var spanSenhaLogin = document.getElementById('span-senha-login');
    senha_nao_confirmada = senha;
    if(senha.length < 8 && senha.length > 0){
        senha_valida = false;
            spanSenha.style.display = "block";
            spanSenha.innerHTML = "Digite uma senha válida!";
            spanSenhaLogin.style.display = "block";
            spanSenhaLogin.innerHTML = "Digite uma senha válida!";
    }else{
        senha_valida = true;
        spanSenha.style.display = "none";
        spanSenhaLogin.style.display = "none";
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

