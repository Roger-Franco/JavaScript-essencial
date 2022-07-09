Array.prototype.filter2 = function (fun) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]


const produtoFragil = (e) => e.fragil === true
const produtoCaro = (e) => e.preco > 500

console.log(produtos.filter2(produtoFragil).filter2(produtoCaro));