//Selecionando o elemento body atribuindo-o à uma variável para manipulação
const body = document.body

//Criando conteúdo para a página através do DOM
const div = document.createElement('div')

//Duas maneiras de atribuir conteúdo em texto ao elemento criado
div.innerText = 'Hello, world!'
div.textContent = 'Hello, world!'

//Incluindo o elemento criado no corpo da página
body.append(div)

//Selecionando um elemento da página
const div2 = document.querySelector('div')

//textContent armazena o texto e a identação aplicada a ele no html
console.log(div2.textContent)
//innerText armazena o texto e o css aplicado nele
console.log(div2.innerText)

//Gerando conteúdo com tags html
const div3 = document.createElement('div')
div3.innerHTML = '<strong>Bold text</strong>'
body.append(div3)

//Uma maneira mais segura de fazer o mesmo. Dificulta manipulação do código fonte pelo usuário final
const div4 = document.createElement('div')
const strong = document.createElement('strong')
strong.innerText = 'Some more bold text'
div4.append(strong)
body.append(div4)

//Removendo elementos da página
const hi = document.querySelector('#hi')
const bye = document.querySelector('#bye')
bye.remove()
//Trazendo o elemento removido de volta
div2.append(bye)

//Acessando atributos de um elemento
console.log(hi.getAttribute('title'))
//Outra maneira de fazer o mesmo
console.log(hi.title)
//Modificando o atributo
hi.setAttribute('title', 'Now it changed!')

//Modificando estilos (útil dentro de ifs. Ex: if preencheu errado = red)
hi.style.backgroundColor = 'red'
bye.style.color = 'limegreen'