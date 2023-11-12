const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalue () {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyvalueconverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencyselect.value)
    const dolartoday = 4.91
    const eurotoday = 5.25
    const bitcointoday = 7.33
    const libratoday = 6.08
    const pesoToday = 0.20
   
   


    
if(currencyselect.value == "dólar") {
    // se o select estiver selecionado o valor de dolár, entre aqui
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (inputcurrencyvalue / dolartoday)
} 


if(currencyselect.value == "euro") {
    // se o select estiver selecionado o valor de euro, entre aqui
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
}).format (inputcurrencyvalue/eurotoday)
}


if(currencyselect.value == "bitcoin") {
    // se o select estiver selecionado o valor de bitcoin, entre aqui
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "GBP"
}).format (inputcurrencyvalue/bitcointoday)
}


if(currencyselect.value == "libra") {
    // se o select estiver selecionado o valor de libra, entre aqui
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "GBP"
}).format (inputcurrencyvalue/libratoday)
}


if(currencyselect.value == "peso") {
    // se o select estiver selecionado o valor de libra, entre aqui
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "UYU"
}).format (inputcurrencyvalue/pesoToday)
}



currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format (inputcurrencyvalue)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencyselect.value =="dólar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }


    if (currencyselect.value =="euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }


    if (currencyselect.value =="bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/BITCOIN.png"
    }


    if (currencyselect.value =="libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/LIBRA.png"
    }


    if (currencyselect.value =="peso") {
        currencyName.innerHTML = "Peso Uruguaio"
        currencyImage.src = "./assets/PESO.png"
    }





    convertvalue ()

}



currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertvalue)


























convertButton.addEventListener("click", convertValues)