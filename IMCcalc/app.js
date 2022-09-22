function calcularIMC () {
    let sexo2 = document.querySelector("input:checked").value
    let peso2 = Number(document.querySelector("#peso").value)
    let altura2 = Number(document.querySelector("#altura").value)
    let resultado = peso2 / altura2 ** 2
    let status = ""
    if (sexo2 == "F") {
        if (resultado < 20.7) {
            status = "Abaixo do peso"
        } else if (resultado >= 19.1 && resultado <= 25.8){
            status = "Peso normal"
        } else if (resultado > 25.8 && resultado <= 27.3) {
            status = "marginalmente acima do peso"
        } else if (resultado > 27.3 && resultado < 32.3) {
            status = "Acima do peso ideal"
        } else {
            status = "Obeso"
        }
    }
    if (sexo2 == "M") {
        if (resultado < 20.7) {
            status = "Abaixo do peso"
        } else if (resultado >= 20.7 && resultado <= 26.4){
            status = "Peso normal"
        } else if (resultado > 26.4 && resultado <= 27.8) {
            status = "marginalmente acima do peso"
        } else if (resultado > 27.8 && resultado < 31.1) {
            status = "Acima do peso ideal"
        } else {
            status = "Obeso"
        }
    }
    console.log(status)
    return status
}

let calcular = document.querySelector("#calcular")
calcular.addEventListener("click", calcularIMC)

let resultado = document.querySelector("#resultado")
resultado.innerHTML = calcularIMC()