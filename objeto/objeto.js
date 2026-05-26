// Sintaxe de um objeto {}
const aluno = {
    nome:"Dheison",
    Idade: 21,
    curso: "Técnico em Desenvolvimento de Sistemas",
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.Idade);

aluno.matricula = "2026TDS" // Adicona uma nova propriedade
aluno.Idade = 18; // Atualiza caso existir

delete aluno.curso; // Excluir uma propriedade
console.log(aluno);
console.log(aluno.Idade);
