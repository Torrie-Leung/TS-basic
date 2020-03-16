const s = Symbol()
const s1 = Symbol()
console.log(typeof s === typeof s1)
//console.log(s === s1) false
const s2 = Symbol('chimp')
console.log(s2)