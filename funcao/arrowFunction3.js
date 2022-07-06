let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false - Em outras palavras, a Arrow Function é mais 
// forte que o bind, pois mantem o this apontando para o objeto no qual a função 
// foi escrita.
comparaComThisArrow(module.exports) // true