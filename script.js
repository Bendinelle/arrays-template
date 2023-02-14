//PRÁTICA GUIADA 1
//ATIVIDADE 1/1
/*
const minhaString = ['Pai', 'Filho', 'E.S']
// console.log(minhaString[2])

//ATIVIDADE 1/2
const meusNumeros = [3, 7, 12]
// console.log(meusNumeros[0])

//ATIVIDADE 1/3
const tudoMisturado = [7, "aleluia", true] 
 //console.log(tudoMisturado[2])

//ATIVIDADE 1/4
const umNumero = [7] 
// console.log(umNumero[0])

//ATIVIDADE 1/5
const vazio = [] 

//PRÁTICA GUIADA 2

const tamanhoString = minhaString.length
console.log(`Qual valor total do array? ${tamanhoString}`)

const posicaoString = minhaString[1]
console.log(`Qual valor está na posição 3 do array? ${posicaoString}`)
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const temAleluia = tudoMisturado.includes('aleluia')
console.log(`Esta lista tem aleluia? ${temAleluia}`)

const temTres = tudoMisturado.includes(3)
console.log(`Esta lista tem 3? ${temTres}`) 

const temTrue = tudoMisturado.includes(true)
console.log(`Esta lista tem True? ${temTrue}`) 
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const numeroSozinho = umNumero [0]
console.log(`Qual é o numero solitário ? ${numeroSozinho}`)

const sozinhoTamanho = umNumero.length
console.log(`Qual é o tamanho do numero solitário ? ${sozinhoTamanho}`)
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//PRÁTICA GUIADA 3

const stringCopiaErro = minhaString

stringCopiaErro.push('Amém')

console.log(`array original ${minhaString}`)
console.log(`Cópia ${stringCopiaErro}`)



const stringCopiaCerta = minhaString.slice()
console.log(`Cópia certa ${stringCopiaCerta}`)

stringCopiaCerta.splice(2, 2)

console.log(`array original ${minhaString}`)
console.log(`Cópia ${stringCopiaCerta}`)
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//PARA FIXAR

const numAleatorios = [3, 7, 10, 12, 33]

const copiaNumAleat = numAleatorios.slice()

copiaNumAleat.pop()
copiaNumAleat.push(6)
copiaNumAleat.splice(2,1)

console.log(`Original: ${numAleatorios}`)
console.log(`Cópia: ${copiaNumAleat}`)






