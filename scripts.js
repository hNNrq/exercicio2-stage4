let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")

let average = (Number(n1) + Number(n2)) / 3

let result = average > 7

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average + "você foi aprovado")
} else {
  alert(student + " Infelizmente você não foi aprovado, sua média foi de: " +  average)
}