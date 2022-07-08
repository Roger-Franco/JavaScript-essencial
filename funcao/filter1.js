const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function (e) {
  return false
}))

function produtoFragil(e) {
  return e.fragil === true
}
function produtoCaro(e) {
  return e.preco > 500
}

console.log(produtos.filter(e => e.fragil === true));
console.log(produtos.filter(e => e.fragil === false));
console.log(produtos.filter(e => e.preco > 2498));
console.log(produtos.filter(e => e.preco > 2498 & e.fragil === true));
console.log(produtos.filter(produtoFragil).filter(produtoCaro));