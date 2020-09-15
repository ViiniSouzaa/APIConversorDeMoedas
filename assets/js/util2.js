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
};
