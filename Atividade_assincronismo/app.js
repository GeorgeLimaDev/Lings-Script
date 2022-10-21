
//Lendo o campo de cep para atribuir uma ação a ele:
let cep = document.getElementById('cep')
cep.addEventListener('focusout', lerCEP)


//Função para passar o CEP digitado para a API:
function lerCEP () {
    const cepValue = document.getElementById('cep').value
    let cepLido = `https://viacep.com.br/ws/${cepValue}/json/`
    console.log(cepLido)
    getCEP(cepLido)
}


//Função assíncrona que recebe o CPF e traz o endereço:
async function getCEP(url) {
    const response = await fetch(url)
    const json = await response.json()
    showContent(json)
}

//Função que exibe os dados recebidos no console e na página:
function showContent(cep) {
    console.log(cep)
    let logradouro = document.getElementById('logradouro')
    logradouro.value = cep.logradouro
    let bairro = document.getElementById('bairro')
    bairro.value = cep.bairro
    let cidade = document.getElementById('cidade')
    cidade.value = cep.localidade
    let estado = document.getElementById('estado')
    estado.value = cep.uf
}