//Usando o seletor de elemento por ID para alterar o estilo css do elemento:
const grandparent = document.getElementById('grandparent')
grandparent.style.backgroundColor = "purple"

//Gerando uma função para alterar a cor:
function changeColor(element) {
    element.style.backgroundColor = "#333"
}

//Selecionando múltiplos elementos (com o mesmo className). É preciso converter em um array:
//const parents = Array.from(document.getElementsByClassName('parent'))
//Para fazer alterações em todos os elementos presentes é preciso iterar com um forEach.
//parents.forEach(changeColor)

//Ao usar querySelector é possível selecionar o elemento por tagName, className ou idName, porém é necessário passar a sintaxe também (ex: ponto ou hashtag):
//const grandparent = document.querySelector('#grandparent') //('.grandparent')
//changeColor(grandparent)

//Neste caso, apesar de haver duas tags com a classe parent, ele altera somente a primeira ocorrência dela.
//const parent = document.querySelector('.parent')
//changeColor(parent)

// Agora aplicando para todas as ocorrências:
const parents = document.querySelectorAll('.parent')
//parents.forEach(changeColor)

//Selecionando elementos por afiliação:
const pais = Array.from(grandparent.children)
pais.forEach(changeColor)
const pai1 = pais[0]
const filhos = pai1.children
changeColor(filhos[0])

//Afiliação direta entre o parente avô e o neto:
const filho = grandparent.querySelector('.child')
filho.style.backgroundColor = "pink"

//Fazendo o caminho inverso no parentesco:
child4 = document.querySelector('#child4')
child4.style.backgroundColor = "white"
const pai = child4.parentElement
pai.style.backgroundColor = 'red'
const avo = pai.parentElement
changeColor(avo)

//Selecionando elementos irmãos:
const filho2 = filho.nextElementSibling //Também funciona com previousElementSibling
filho2.style.backgroundColor = 'orange'