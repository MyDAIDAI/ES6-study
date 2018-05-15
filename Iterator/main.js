let it = makeIterator(['a', 'b'])
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true}
    }
  }
}
console.log(it.next()) // { value: 'a', done: false }
console.log(it.next()) // { value: 'b', done: false }
console.log(it.next()) // { value: undefined, done: true }
for (let i of ['a', 'b']) {
  console.log(i) // a b
}
let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()
console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'b', done: false }
// 类数组对象
// let iterable = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// }
// for (let item of iterable) {
//   console.log(item) // a b c
// }
// 普通对象
// let iterable = {
//   'a': 'a',
//   'b': 'b',
//   'c': 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// }
// for (let item of iterable) {
//   console.log(item) // undefined undefined undefined
// }
let obj = {
  'a': 'a',
  'b': 'b',
  'c': 'c'
}
for (let item of Object.entries(obj)) {
  console.log(item) // [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ]
}