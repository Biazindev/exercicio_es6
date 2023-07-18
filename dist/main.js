const ebac = [{
  nome: 'Tiago',
  nota: 10
}, {
  nome: 'Jessica',
  nota: 10
}, {
  nome: 'Aline',
  nota: 7
}, {
  nome: 'Joao',
  nota: 5
}, {
  nome: 'Ruan',
  nota: 3
}];
console.log(ebac);
console.log('Alunos Aprovados:');
ebac.filter(aluno => aluno.nota > 6).forEach(aluno => {
  console.log(aluno.nome);
});