//Lendo o campo de cep para atribuir uma ação a ele:
let cep = document.getElementById('cep')
cep.addEventListener('focusout', lerCEP)


//Função para passar o CEP digitado para a API:
function lerCEP () {
    let cepValue = cep.value
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

//Função que exibe os dados recebidos na página:
function showContent(json) {
    let logradouro = document.getElementById('logradouro')
    logradouro.value = json.logradouro
    let bairro = document.getElementById('bairro')
    bairro.value = json.bairro
    let cidade = document.getElementById('cidade')
    cidade.value = json.localidade
    let estado = document.getElementById('estado')
    estado.value = json.uf
}

//Função executada quando o tamanho do CEP digitado for diferente de 8 dígitos:
function erroCEP() {
    window.alert('Digite um CEP válido.')
    cep.style.border = '1px solid red'
}