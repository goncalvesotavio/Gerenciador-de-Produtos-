import produtos, { filtrarPorPreco, aplicarDesconto, calcularTotal } from "./produtos.js";

console.log("Lista de Produtos:", produtos);

console.log("Produtos acima de R$1000:", filtrarPorPreco(1000));

console.log("Produtos com 10% de desconto:", aplicarDesconto(10));

console.log("Preço total dos produtos:", calcularTotal());