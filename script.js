let nomes=[], nome, nota, notas=[], i, soma = 0, media

for(i = 0; i < 5; i++){

nome = (prompt("Digite o Nome de um aluno(a)"))
nomes.push(nome)

nota = Number(prompt("Digite a Nota dos respectivos alunos: "))
notas.push(nota)

soma = nota + soma
} 

media = soma/5

