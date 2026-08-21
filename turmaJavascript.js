const turmaArray = [
  {
    nomeProfessor: "Murilo",
    alunos: [
      {
        nomeAluno: "Enzo",
        nota: 8,
      },
      {
        nomeAluno: "Pedro",
        nota: 6,
      },
    ],
  },
  {
    nomeProfessor: "Murilo 2",
    alunos: [
      {
        nomeAluno: "Enzo 2",
        nota: 5,
      },
      {
        nomeAluno: "Pedro 2",
        nota: 7,
      },
    ],
  },
];

function ordernarNotas(notas) {
  return notas.sort((a, b) => a - b);
}

for (let i = 0; i < turmaArray.length; i++) {
  let turma = turmaArray[i];
  
  for (let y = 0; y < turma.alunos.length; y++) {
    let aluno = turma.alunos[y];
    
  }
}
