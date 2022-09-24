function calcularIMC() {
    let sexo = document.querySelector("input:checked").value
    let peso = Number(document.querySelector("#peso").value)
    let altura = Number(document.querySelector("#altura").value)
    let resultado = peso / altura ** 2
    let status = ""
    if (sexo == "F") {
      if (resultado < 20.7) {
        status = "Abaixo do peso"
      } else if (resultado >= 19.1 && resultado <= 25.8) {
        status = "Peso normal"
      } else if (resultado > 25.8 && resultado <= 27.3) {
        status = "marginalmente acima do peso"
      } else if (resultado > 27.3 && resultado < 32.3) {
        status = "Acima do peso ideal"
      } else {
        status = "Obeso"
      }
    }
    if (sexo == "M") {
      if (resultado < 20.7) {
        status = "Abaixo do peso"
      } else if (resultado >= 20.7 && resultado <= 26.4) {
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
    let inputResultado = document.querySelector("#resultado")
    inputResultado.value = `${resultado.toFixed(2)} - ${status}`
  }
  
  console.log('chegou aqui')
  let botaoCalcular = document.querySelector("#calcular")
  botaoCalcular.addEventListener("click", calcularIMC)