/*É possível colocar números e strings na mesma lista*/

const alunos = ['João', 'Vitor', 'Mariana'];

alunos.push('Renan'); /*Inclui no final da lista*/

alunos[4] = 'Vinícius';

alunos[3] = 'Ana'; /*Substitui o nome que está na posição 3*/

console.log(alunos);
console.log(alunos[0]);

/*alunos.pop() retira o último item da lista e pode utilziar ele usando essa função, alunos.shift retira o primeiro*/

