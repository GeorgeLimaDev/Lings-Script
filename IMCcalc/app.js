function calcularIMC() {
    let sexo = document.querySelector("input:checked").value
    let peso = Number(document.querySelector("#peso").value)
    let altura = Number(document.querySelector("#altura").value)
    let resultado = peso / altura ** 2
    let status = ""
    let inputResultado = document.querySelector("#resultado")
    if (sexo == "F") {
      if (resultado < 19.1) {
        status = "Abaixo do peso"
        inputResultado.style.backgroundColor = 'orange'
      } else if (resultado >= 19.1 && resultado <= 25.8) {
        status = "Peso normal"
        inputResultado.style.backgroundColor = 'green'
      } else if (resultado > 25.8 && resultado <= 27.3) {
        status = "marginalmente acima do peso"
        inputResultado.style.backgroundColor = 'orange'
      } else if (resultado > 27.3 && resultado < 32.3) {
        status = "Acima do peso ideal"
        inputResultado.style.backgroundColor = 'orange'
      } else {
        status = "Obeso"
        inputResultado.style.backgroundColor = 'red'
      }
    }
    if (sexo == "M") {
      if (resultado < 20.7) {
        status = "Abaixo do peso"
        inputResultado.style.backgroundColor = 'orange'
      } else if (resultado >= 20.7 && resultado <= 26.4) {
        status = "Peso normal"
        inputResultado.style.backgroundColor = 'green'
      } else if (resultado > 26.4 && resultado <= 27.8) {
        status = "marginalmente acima do peso"
        inputResultado.style.backgroundColor = 'orange'
      } else if (resultado > 27.8 && resultado < 31.1) {
        status = "Acima do peso ideal"
        inputResultado.style.backgroundColor = 'orange'
      } else {
        status = "Obeso"
        inputResultado.style.backgroundColor = 'red'
      }
    }
    console.log(status)
    inputResultado.value = `${resultado.toFixed(2)} - ${status}`
  }

let botaoCalcular = document.querySelector("#calcular")
botaoCalcular.addEventListener("click", calcularIMC)