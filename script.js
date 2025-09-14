//Crie uma função mostrarTabuada5 que exiba no console a tabuada do número 5 (até o 10).
 /*function mostrarTabuada5() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

mostrarTabuada5(); */

//Crie uma função multiplicar que receba dois números e retorne o resultado da multiplicação.
/*function multiplicar(a, b) {
  return a * b;
}
let resultado = multiplicar(7, 2);
console.log(resultado); */ 

//Crie uma função repetirFrase que receba uma frase e um número n. 
// ● A função deve repetir a frase n vezes no console.
/*function repetirFrase(frase, n) {
  for (let i = 0; i < n; i++) {
    console.log(frase);
  }
}
repetirFrase("Ler é fundamental!", 7); */

//Crie uma função calcularDesconto que receba o valor de um produto e um desconto (opcional, padrão 5%).
//● Retorne o valor com desconto aplicado.
/*function calcularDesconto(valor, desconto = 5) {
  let valorComDesconto = valor - (valor * (desconto / 100));
  return valorComDesconto;
}
console.log(calcularDesconto(100));     
console.log(calcularDesconto(200, 10));  
console.log(calcularDesconto(150, 0)); */   

//Crie uma função compararNumeros que receba dois números e exiba:
//● "O primeiro é maior" se o primeiro for maior,
//● "O segundo é maior" se o segundo for maior,
//● "São iguais" caso contrário.
/*function compararNumeros(a, b) {
  if (a > b) {
    console.log("O primeiro é maior");
  } else if (b > a) {
    console.log("O segundo é maior");
  } else {
    console.log("São iguais");
  }
}
compararNumeros(10, 5);   
compararNumeros(3, 8);    
compararNumeros(7, 7); */


//Crie uma função classificarNota que receba uma nota de 0 a 10 e retorne:
//● "Aprovado" se for maior ou igual a 7
//● "Recuperação" se for entre 5 e 6
//● "Reprovado" se for menor que 5
/* function classificarNota(nota) {
  if (nota >= 7 && nota <= 10) {
    return "Aprovado";
  } else if (nota >= 5 && nota < 7) {
    return "Recuperação";
  } else if (nota >= 0 && nota < 5) {
    return "Reprovado";
  } else {
    return "Nota inválida";
  }
}
console.log(classificarNota(8)); 
console.log(classificarNota(6));  
console.log(classificarNota(3));   
console.log(classificarNota(11));  */


//Crie uma função mostrarImpares que receba um número n e mostre todos os números ímpares de 1 até n.
/* function mostrarImpares(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

mostrarImpares(10); */

//Crie uma função primeiroEUltimo que receba um array e retorne uma string com o primeiro e o último elemento.
/*function primeiroEUltimo(arr) {
   if (arr.length === 1) return String(arr[0]); 
  
  return `${arr[0]} ${arr[arr.length - 1]}`;
}
console.log(primeiroEUltimo(["maçã", "banana", "laranja"])); 
console.log(primeiroEUltimo([11,32,88,25])); */

//Crie uma função somarElementos que receba um array de números e retorne a soma de todos os elementos.

//Crie uma função controleDeEstoque que:
//● Receba um array de objetos no formato:
//[
//{ nome: "Arroz", quantidade: 10 },
//{ nome: "Feijão", quantidade: 5 },
//{ nome: "Macarrão", quantidade: 8 }
//]
//Exiba cada produto no console no formato "Produto: Arroz | Quantidade: 10".
//Retorne o total de itens no estoque.