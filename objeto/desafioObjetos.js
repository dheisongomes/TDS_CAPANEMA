/*  Shist + Alt + A -> Atalho para comentário de várias linhas

Desafio: Criar um objeto que contenha informações de um filme favorito,
Sendo necessário inserir uma nova propriedade, modificar uma existente, e
e excluir uma propriedade. NO final imprimir o objeto no console.

*/

const filme = {
   
    Nome: "Jogos Vorazes",
    Tipo: "Ficção",
    Atriz: "Jennifer Lawrence",
    Vilão: "Capital",

}

console.log(filme);

filme.coadjuvante = "Peeta"
console.log(filme);

filme.Vilão = "Snow"
console.log(filme);

delete filme.Tipo;
console.log(filme);

