const turmaArray = [
    {
        nomeProfessor: "Murilo",
        alunos: [
            { nome: "Enzo", nota: 8.5 },
            { nome: "Ana", nota: 5.0 },
            { nome: "Bruno", nota: 7.0 }
        ]
    },
    {
        nomeProfessor: "Murilo 2",
        alunos: [
            { nome: "Julia", nota: 6.2 },
            { nome: "Diego", nota: 9.8 },
            { nome: "Elena", nota: 4.5 }
        ]
    }
];

function ordenarAlunosPorNota(turmaArray) {
    for (let i = 0; i < turmaArray.length; i++) {
        turmaArray[i].alunos.sort((a, b) => a.nota - b.nota);
    }
}

function imprimirResultadosAlunos(turmaArray) {
    for (let i = 0; i < turmaArray.length; i++) {
        const turma = turmaArray[i];
        console.log(`\n--- Turma do Prof. ${turma.nomeProfessor} ---`);
        
        for (let j = 0; j < turma.alunos.length; j++) {
            const aluno = turma.alunos[j];
            
            if (aluno.nota >= 7) {
                console.log(`Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`);
            } else {
                console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
            }
        }
    }
}
ordenarAlunosPorNota(turmaArray);

imprimirResultadosAlunos(turmaArray);
