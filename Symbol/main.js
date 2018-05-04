let s = Symbol();
let s1 = Symbol('foo');
let s2 = Symbol('foo');
console.log(s1 === s2); // false
console.log(typeof s) // Symbol
console.log(s1) // Symbol(foo)
console.log(s1.toString()) // Symbol(foo)
let obj = {
  'obj': 'obj',
  toString () {
    return 'toString'
  }
};
console.log(Symbol(obj)) // Symbol(toString)
// let s1 = Symbol('foo');
s1 = s1.toString()
console.log(s1 + 'hello') // Cannot convert a Symbol value to a string
console.log(Boolean(s1)) // true
console.log(Number(s1)) // NaN
