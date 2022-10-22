
//Lendo o campo de cep para atribuir uma ação a ele:
let cep = document.getElementById('cep')
cep.addEventListener('focusout', lerCEP)


//Função para passar o CEP digitado para a API:
function lerCEP () {
    let cepValue = document.getElementById('cep').value
    let cepLido = `https://viacep.com.br/ws/${cepValue}/json/`
    getCEP(cepLido)
}


//Função assíncrona que recebe o CPF e traz o endereço:
async function getCEP(cepLido) {
    try {
        const response = await fetch(cepLido)
        const json = await response.json()
        showContent(json)
        cep.style.border = '' //Esta linha é pra voltar ao padrão depois de uma tentativa incorreta, se não fica sempre vermelho.
    } catch {
        erroCEP()
    }
}

//Função que exibe os dados recebidos no console e na página:
function showContent(cep) {
    let logradouro = document.getElementById('logradouro')
    logradouro.value = cep.logradouro
    let bairro = document.getElementById('bairro')
    bairro.value = cep.bairro
    let cidade = document.getElementById('cidade')
    cidade.value = cep.localidade
    let estado = document.getElementById('estado')
    estado.value = cep.uf
}

function erroCEP() {
    window.alert('Digite um CEP válido.')
    cep.style.border = '1px solid red'
}