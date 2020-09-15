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

