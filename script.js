function alturaImagem() {

    var alturaInicial = document.getElementsByClassName('imagem-capa').getBoundingClientRect().height;

    console.log(alturaInicial);

    var alturaTitulos = document.getElementsByClassName("titulo").getBoundingClientRect().height + document.getElementsByClassName("data").getBoundingClientRect().height;

    console.log(alturaTitulos);

    document.getElementsByClassName("imagem-capa").style.maxHeight = alturaInicial - alturaTitulos;
}

document.onload = alturaImagem();