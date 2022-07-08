Array.prototype.map2 = function (fun) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    novoArray.push(fun(this[i], i, this))
  }
  return novoArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = e => JSON.parse(e)
const apenasPreco = e => e.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado);
