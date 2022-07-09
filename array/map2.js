const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços:

// const carrinhoMap = carrinho.map(e => e.replace(/\D/g, ''))
// const carrinhoMap2 = carrinho.map(e => JSON.parse(e))
const carrinhoMap1 = carrinho.map(JSON.parse) // transforma as strings em objeto
const carrinhoMapPreco = carrinhoMap1.map(e => `R$ ${e.preco}`)
const carrinhoMapPreco1 = carrinhoMap1.map(e => e.preco)

// const formatCarrinhoMapPrecoDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// const precoFormatado = carrinhoMapPreco.map(carrinhoMapPreco).map(formatCarrinhoMapPrecoDinheiro)

// console.log(carrinhoMap);
// console.log(carrinhoMap2);
console.log(carrinhoMap1);
console.log(carrinhoMapPreco);
console.log(carrinhoMapPreco1);

/* ============ */

const paraObjeto = e => JSON.parse(e)
const apenasPreco = e => e.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado);