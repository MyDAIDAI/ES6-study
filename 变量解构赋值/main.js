// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c) // 1 2 3
// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(foo, bar, baz) // 1 2 3
// let [, , third] = [1, 2, 3]
// console.log(third) // 3
// let [head, ...tail] = [1, 2, 3, 4]
// console.log(head, tail) // 1 [ 2, 3, 4 ]
// let [x, y, ...z] = [1]
// console.log(x, y, z) // 1 undefined []
// let [e, f, d] = new Set([1, 2, 3])
// console.log(e, f, d)
// let [foo = true] = []
// console.log(foo)
// let [x, y = 'b'] = ['a', undefined]
// console.log(x, y) // a, b
// let [x, y = 'b'] = ['a', null]
// console.log(x, y) // a, null
// function f() {
//   console.log('aaa')
// }
// let [x = f()] = [1]
// console.log(x) // 1
// function f() {
//   console.log('aaa') // aaa
// }
// let [x = f()] = []
// console.log(x) // undefined
// function f() {
//   console.log('aaa') // aaa
//   return 1
// }
// let [x = f()] = []
// console.log(x) // 1
// let [x = 1, y = x] = []
// console.log(x, y) // 1, 1
// let [x = 1, y = x] = [2]
// console.log(x, y) // 2, 2
// let [x = 1, y = x] = [2, 3]
// console.log(x, y) // 2, 3
// let [x = y, y = 1] = []
// console.log(x, y) //  y is not defined
// let {foo, bar} = {foo: '1', bar: '2'}
// console.log(foo, bar) // 1, 2
// let {bar, foo} = {foo: '1', bar: '2'}
// console.log(foo, bar) // 1 2
// let {foo: baz, bar} = {foo: '1', bar: '2'}
// console.log(baz, bar) // 1 2
// console.log(foo, baz, bar) // ReferenceError: foo is not defined
// let obj = {
//   p: [
//     'hello',
//     {
//       y: 'world'
//     }
//   ]
// }
// let {p: [a, {y: b}]} = obj
// console.log(a, b) // hello world
// let obj = {
//   p: [
//     'hello',
//     {
//       y: 'world'
//     }
//   ]
// }
// let {p, p: [a, {y, y: b}]} = obj
// console.log(p, a, b, y) // [ 'hello', { y: 'world' } ] 'hello' 'world' 'world'
// let obj = {};
// let arr = [];
// ({foo: obj.prop, bar: arr[0]} = {foo: 1, bar: 2});
// console.log(obj, arr); // { prop: 1 } [ 2 ]
// let {x = 2} = {}
// console.log(x)
// let {x = 2, y = 1} = {x: 3, y: 4};
// console.log(x, y)
// let {x: y = 1} = {x: 2};
// console.log(y) // 2
// let {x: y = 2} = {x: null}
// console.log(y) // null
// let {foo: {bar}} = {baz: 'bar'}
// console.log(bar) // TypeError: Cannot destructure property `bar` of 'undefined' or 'null'.
// let arr = [1, 2, 3];
// let {0: first, [arr.length - 1]: last} = arr
// console.log(first, last) // 1 3
// let [a, b, c] = 'hello'
// console.log(a, b, c) // h e l
// let {length: len} = 'hello'
// console.log(len) // 5
// let {toString: s} = 123
// console.log(s) // [Function: toString]
// let {toString: b} = true
// console.log(b) // [Function: toString]
// let {prop: x} = undefined
// console.log(x) // Cannot destructure property `prop` of 'undefined' or 'null'
// function move({x, y} = {x: 0, y: 0}) {
//   return[x, y]
// }
// console.log(move({x: 3, y: 2})) // [ 3, 2 ]
// console.log(move({x: 3})) // [ 3, undefined ]
// console.log(move({})) // [ undefined, undefined ]
// console.log(move()) // [ 0, 0 ]
