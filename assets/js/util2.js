const moedas = {
    AED:"Dirham dos Emirados",
    ARS:"Peso Argentino",
    AUD:"Dólar australiano",
    BGN:"Lev búlgaro",
    BRL:"Real brasileiro",
    BSD:"Dólar das Bahamas",
    CAD:"Dólar canadense",
    CHF:"Franco suíço",
    CLP:"Peso chileno",
    CNY:"Renminbi chines",
    COP:"Peso colombiano",
    CZK:"Coroa checa",
    DKK:"Coroa dinamarquesa",
    DOP:"Peso dominicano",
    EGP:"Libra egípcia",
    EUR:"Euro",
    FJD:"Dólar das Fiji",
    GBP:"Libra Esterlina",
    GTQ:"Quetzal guatemalteco",
    HKD:"Dólar de Hong Kong",
    HRK:"Kuna croata",
    HUF:"Forint hunguro",
    IDR:"Rupia indonésia",
    ILS:"Shekel Israelita",
    INR:"Rupia indiana",
    ISK:"Coroa islandesa",
    JPY:"Iene Japones",
    KRW:"Won sul-coreano",
    KZT:"Tenge",
    MVR:"Rufiyaa",
    MXN:"Peso mexicano",
    MYR:"Ringgit",
    NOK:"Coroa norueguesa",
    NZD:"Dólar da Nova Zelândia",
    PAB:"Balboa",
    PEN:"Nuevo Sol",
    PHP:"Peso filipino",
    PKR:"Rupia paquistanesa",
    PLN:"Zloty",
    PYG:"Guarani",
    RON:"RON",
    RUB:"Rublo",
    SAR:"Riyal",
    SEK:"Coroa Sueca",
    SGD:"Dólar de Singapura",
    THB:"Baht",
    TRY:"Nova Lira turca",
    TWD:"Novo dólar de Taiwan",
    UAH:"Grívnia",
    USD:"Dólar americano",
    UYU:"Peso uruguaio",
    ZAR:"Rand"
}

window.onload = function () {

    verificaLogin();

    const moedasPrincipal = document.getElementById("selectPrincipal");
    const moedasSecundario = document.getElementById("selectSecundario");
    for (moeda in moedas) {
        option = new Option(moedas[moeda], moeda);
        moedasPrincipal.options[moedasPrincipal.options.length] = option;
    }
    for (moeda in moedas) {
        option = new Option(moedas[moeda], moeda);
        moedasSecundario.options[moedasSecundario.options.length] = option;
    }
    moedasPrincipal.selectedIndex = 5;
    moedasSecundario.selectedIndex = 50;
    converter();
};

function verificaLogin(){
    if(localStorage.getItem('token') != 0){
        document.getElementById('pagina').style.display = 'block';
    }else{
        alert("Voce não está logado!");
        location.href = 'index.html';
    }
}

function inverter(){
    var moedasPrincipal = document.getElementById('selectPrincipal');
    var moedasSecundario = document.getElementById('selectSecundario');
    var valorPrincipal = moedasPrincipal.selectedIndex;
    var valorSecundario = moedasSecundario.selectedIndex;
    moedasPrincipal.selectedIndex = valorSecundario;
    moedasSecundario.selectedIndex = valorPrincipal;
}

function converter(){
    var moedasPrincipal = document.getElementById('selectPrincipal');
    var sigla = moedasPrincipal.options[moedasPrincipal.selectedIndex].value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType = ("application/JSON");
    xmlhttp.open("GET", "https://v6.exchangerate-api.com/v6/fe406c757024770e1e5eb9fd/latest/" + sigla, true);
    xmlhttp.onload =  function (){
        var resposta = JSON.parse(xmlhttp.responseText).conversion_rates;
        pegaValores(resposta);
    }
    xmlhttp.send();

    document.getElementById('valor-desejado').value = 1;
}
var valorMoeda2;
function pegaValores(resposta){
    var moedasPrincipal = document.getElementById('selectPrincipal');
    var moedasSecundario = document.getElementById('selectSecundario');
    var siglaPrincipal = moedasPrincipal.options[moedasPrincipal.selectedIndex].value;
    var siglaSecundaria = moedasSecundario.options[moedasSecundario.selectedIndex].value;
    var nomeMoeda1 = moedasPrincipal.options[moedasPrincipal.selectedIndex].text;
    var nomeMoeda2 = moedasSecundario.options[moedasSecundario.selectedIndex].text;

    for (moeda in resposta) {
        if(moeda == siglaSecundaria){
            valorMoeda2 = resposta[moeda];
        }
    }
    populaLista1(siglaPrincipal, nomeMoeda1);
    populaLista2(siglaSecundaria, valorMoeda2, nomeMoeda2);
    converteValores(1); 
}

function populaLista1(sigla, nome){
    var doc_sigla = document.getElementById('sigla-moeda-1');
    var doc_nome = document.getElementById('nome-moeda-1');
    var doc_valor =  document.getElementById('valor-moeda-1');
    var doc_sigla2 = document.getElementById('sigla-moeda-3');
    var doc_nome2 = document.getElementById('nome-moeda-3');
    var doc_valor2 =  document.getElementById('valor-moeda-3');

    doc_sigla.innerHTML = sigla;
    doc_nome.innerHTML = nome;
    doc_valor.innerHTML = 1;
    doc_sigla2.innerHTML = sigla;
    doc_nome2.innerHTML = nome;
    doc_valor2.innerHTML = 1;
}

function populaLista2(sigla, valor, nome){
    var doc_sigla = document.getElementById('sigla-moeda-2');
    var doc_nome = document.getElementById('nome-moeda-2');
    var doc_valor =  document.getElementById('valor-moeda-2');
    var doc_sigla2 = document.getElementById('sigla-moeda-4');
    var doc_nome2 = document.getElementById('nome-moeda-4');
    var doc_valor2 =  document.getElementById('valor-moeda-4');

    doc_sigla.innerHTML = sigla;
    doc_nome.innerHTML = nome;
    doc_valor.innerHTML = valor;
    doc_sigla2.innerHTML = sigla;
    doc_nome2.innerHTML = nome;
    doc_valor2.innerHTML = valor;
    
    document.getElementById('1').textContent = (1*valor).toFixed(4);
    document.getElementById('2').textContent = (2*valor).toFixed(4);
    document.getElementById('5').textContent = (5*valor).toFixed(4);
    document.getElementById('10').textContent = (10*valor).toFixed(4);
    document.getElementById('100').textContent = (100*valor).toFixed(4);
    document.getElementById('1000').textContent = (1000*valor).toFixed(4);
    document.getElementById('5000').textContent = (5000*valor).toFixed(4);
    document.getElementById('10000').textContent = (10000*valor).toFixed(4);
    document.getElementById('50000').textContent = (50000*valor).toFixed(4);
    document.getElementById('100000').textContent = (100000*valor).toFixed(4);   
}
function converteValores(valor){
    var valorConvertido = document.getElementById('valor-convertido');
    valorConvertido.value = (valor*valorMoeda2).toFixed(3);
}

function sair(){
    location.href = 'index.html';
    localStorage.setItem('token', "0");
}