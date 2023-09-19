const alunos = [
  { nome: "Alice", nota: 8.6 },
  { nome: "Carol", nota: 5.2 },
  { nome: "Davi", nota: 9.8 },
  { nome: "Eva", nota: 4.9 },
];

function filtraAlunosAprovados(aluno) {
  return aluno.nota >= 6;
}

const alunosAprovados = alunos.filter(filtraAlunosAprovados);

console.log(alunosAprovados);
