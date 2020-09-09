let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let greaterName = names[0]

function highCharacters(names) {
  for (let key in names) {
    if (greaterName.length < names[key].length){
    greaterName = names[key]
    }
  }
  return greaterName
}

console.log(highCharacters(names))