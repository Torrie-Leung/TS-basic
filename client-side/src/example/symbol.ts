const s = Symbol()
const s1 = Symbol()
console.log(typeof s === typeof s1)
//console.log(s === s1) false
const s2 = Symbol('chimp')
console.log(s2.toString()) //Symbol(chimp)
console.log(Boolean(s2)) //true
console.log(!s2) //false

let prop = 'name'
const info = {
  // name: 'Bender'
  [prop] : 'Bender',
  [`her${prop}is`] : 'Chimp',
  salary:2300,
  skill: 'dreaming'
}
console.log(info)
const s3 = Symbol('name')
const info1 = {
  [s3]: 'Johnny',
  type: 'gorgeous'
}
console.log(info1)

for(const key in info){
  console.log(key)
}

for(const key in info1){
  console.log(key)
}
console.log(Object.keys(info))
console.log(Object.keys(info1))
console.log(Object.getOwnPropertyNames(info1))

console.log(Object.getOwnPropertySymbols(info1))
// Reflect will return all types of attributes' name in an objec
console.log(Reflect.ownKeys(info1))

const s9 = Symbol.for('newt')
console.log(Symbol.keyFor(s9))