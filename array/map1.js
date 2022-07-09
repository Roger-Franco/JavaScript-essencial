const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (e) {
  return e * 2
})
let resultado1 = nums.map(e => {
  return e * 3
})

console.log(resultado);
console.log(resultado1);

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado3 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado3);