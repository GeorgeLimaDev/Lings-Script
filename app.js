// Revisão de conceitos e familiarização com a sintaxe da linguagem.
// Vídeo de referência: https://www.youtube.com/watch?v=i6Oi-YtXnAU

// Comandos básicos:

let idade = 28
console.log(idade)
let altura = 1.75
console.log(altura)
let nome = 'George'
console.log(nome)

// Constantes: Utilizadas para receber valores que não serão alterados ao longo da execução.
const pi = 3.14

// Tipos primitivos: 
// String: Caracteres de texto.
let boasVindas = 'Bem vindo!'
// Number: Valores numéricos inteiros ou decimais.
let peso = 65
// Boolean: valores lógicos True ou False advindos de testes de expressões.
let validador = true
// Undefined: Inicia a variável sem nenhum valor atribuído (indefinido).
let vazio = undefined
// Null: Valor nulo. Útil para redefinir valor na variável ao longo da execução.
let seletor = null

// Tipagem dinâmica:
// Função typeof: exibe o tipo da variável na qual for chamada.
console.log(typeof boasVindas)
// A tipagem dinâmica permite que a mesma variável possa receber valores de diferentes tipos ao longo da execução do código.

// Objetos:
// É um tipo por referência, em contraponto aos primitivos.
let pessoa = {
    documento: '123.456.789-00',
    registrada: true,
}
console.log(typeof pessoa)
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.registrada)

// Arrays:
// Conjunto de valores atribuídos em simultâneo a uma variável.
let familia = ['Pai', 60, false, 'Mãe', 59, true]
console.log(familia)
// Para acessar valores específicos do array é preciso especificar o índice desejado, começando a contagem do zero.
console.log(familia[3])
// Por ser um objeto é possível executar funções no array.
console.log(familia.length) // Exibe o número de valores contidos no array.

// Funções:
// Blocos de códigos predefinidos na linguagem ou criados pelo programador para executar funções específicas.
let tema = ''
function alterarTema (selecionado) {
    tema = selecionado
}
// Exibindo o tema definido:
tema = 'claro'
console.log(tema)
// Chamando a função:
alterarTema('Escuro')
// Verificando valor na variável tema após execução da função:
console.log(tema)

// Tipos de funções:
// Tipo 1: Realiza uma tarefa e não retorna nada.
function dizerNome() {
    console.log('George')
}
dizerNome()

// Tipo 2: Realiza a tarefa e retorna um resultado para o programa principal
function DobrarNumero (valor) {
    return valor * 2
}
console.log(DobrarNumero(5))
// Quando há um retorno ele pode ser armazenado em uma variável.
let resultado = DobrarNumero(4)
console.log(resultado)

// Operadores:
// Aritméticos (matemáticos: +, -, *, **, /, //, %, ^, ...)
let salario = 1212
console.log(salario + salario)
console.log(salario / salario)
// Operadores de atribuição (O sinal de = usado para atribuir valores às variáveis.)
let valor = 100
valor += 100 // (Forma encurtada de somar os mesmos valores)
console.log(valor)
// Operadores de comparação (idênticos: mesmo valor e tipo. Igual: mesmo valor podendo diferir em tipo)
console.log(1 === 1) // True, pois são idênticos
console.log(1 === '1') // False, pois são diferentes em tipos.
console.log(1 == '1') // True pois são iguais em valor
// Operadores lógicos
// Operadores bitwise