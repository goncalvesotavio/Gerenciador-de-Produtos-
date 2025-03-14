const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Smartphone", preco: 1500 },
  { id: 3, nome: "Tablet", preco: 1800 },
  { id: 4, nome: "Fone de Ouvido", preco: 200 },
  { id: 5, nome: "Monitor", preco: 1200 },
  { id: 6, nome: "Teclado Mecânico", preco: 350 },
  { id: 7, nome: "Mouse Gamer", preco: 250 },
  { id: 8, nome: "Impressora", preco: 800 },
  { id: 9, nome: "Cadeira Gamer", preco: 1500 },
  { id: 10, nome: "Placa de Vídeo", preco: 3000 }
];

export const filtrarPorPreco = (limite) => produtos.filter(({ preco }) => preco > limite);

export const aplicarDesconto = (desconto) => 
  produtos.map(({ id, nome, preco }) => ({
    id,
    nome,
    preco: preco - (preco * desconto) / 100
  }));

export const calcularTotal = () => produtos.reduce((total, { preco }) => total + preco, 0);

export default produtos;