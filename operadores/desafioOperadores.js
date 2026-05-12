// DESAFIO

/* 

Atalho: SHIFT + ALT + A

01.Utilizando os operadores relacionais, declare 2 variáveis e
 imprima no output/console 5 valores TRUE e 5 valores FALSE.
*/



let Dheison = 21 // Number
let Gomes = "21" // String

// = atribuição
// == compara somente o valor
// === compara valor e tipo

console.log(Dheison != Gomes);
console.log(Dheison === Gomes);
console.log(Dheison > Gomes);
console.log(Dheison < Gomes);
console.log(Gomes === Dheison);
console.log(Dheison >= Gomes);
console.log(Dheison <= Gomes);
console.log(Dheison !== Gomes);
console.log(Dheison >= Gomes);
console.log(Dheison >= Gomes);
console.log(Gomes != Dheison);


// CORREÇÃO COM O PROFESSOR

// Declare 2 variáveis
let a = 10;
let b = 20;

// Valores TRUE
console.log("Valores TRUE: ");
console.log(a < b);
console.log(a != b);
console.log(a <= b);
console.log(b >= a);
console.log(b != a);

// Valores FALSE
console.log("Valores FALSE: ");
console.log(b < a);
console.log(a == b);
console.log(b <= a);
console.log(a >= b);
console.log(b == a);
