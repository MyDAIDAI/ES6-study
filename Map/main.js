// let m = new Map();
// m.set(o, 'content');
// console.log(m) // Map { { p: 'hello world' } => 'content'// }
// console.log(m.get(o)) // content
// console.log(m.has(o)) // true
// console.log(m.delete(o)) // true
// console.log(m.has(o)) // false
// let o = {p: 'hello world'}
let o = {p: 'hello world'}
let map = new Map([[o, 'dengpan'], ['age', 20]])
console.log(map.get(o)) // dengpan
map.delete(o)
console.log(map.has(o)) // false
let set = new Set([['hello', 'world'], ['1', '2']])
console.log(set) // Set { [ 'hello', 'world' ], [ '1', '2' ] }
let setMap = new Map(set)
console.log(setMap) // Map { 'hello' => 'world', '1' => '2' }
console.log(setMap.get('hello')) // setMap.get('hello')
let map1 = new Map([['1', '2']])
console.log(map1) // Map { '1' => '2' }
let map2 = new Map(map1)
console.log(map2) // Map { '1' => '2' }
let map3 = new Map()
map3.set(['2'], '2')
console.log(map3.get(['2'])) // undefined
let arr = ['3']
map3.set(arr, '3')
console.log(map3.get(arr)) // 3