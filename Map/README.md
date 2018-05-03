# `Map`
类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值，包括对象都可以当做键，也就是说，`Object`结构提供了一种"字符串-值"的对应,`Map`结构提供了"值-值"的对应
```
let m = new Map();
let o = {p: 'hello world'}
m.set(o, 'content');
console.log(m) // Map { { p: 'hello world' } => 'content'// }
console.log(m.get(o)) // content
console.log(m.has(o)) // true
console.log(m.delete(o)) // true
console.log(m.has(o)) // false
```
`Map`构造函数可以接受一个数组作为参数，该数组的成员是一个个表示键值对的数组
```
let o = {p: 'hello world'}
let map = new Map([[o, 'dengpan'], ['age', 20]])
console.log(map.get(o)) // dengpan
map.delete(o)
console.log(map.has(o)) // false
```
任何具有`Iterator`接口，且**每个成员都是一个双数组**的数据结构，都可以作为`Map`构造函数的参数
也就是说`Set`和`Map`都可以用来生成新的`Map`
```
let set = new Set([['hello', 'world'], ['1', '2']])
console.log(set) // Set { [ 'hello', 'world' ], [ '1', '2' ] }
let setMap = new Map(set)
console.log(setMap) // Map { 'hello' => 'world', '1' => '2' }
console.log(setMap.get('hello')) // setMap.get('hello')
let map1 = new Map([['1', '2']])
console.log(map1) // Map { '1' => '2' }
let map2 = new Map(map1)
console.log(map2) // Map { '1' => '2' }
```
注意，只有对同一个对象的引用，`Map`结构才将其视为同一个键
```
let map3 = new Map()
map3.set(['2'], '2')
console.log(map3.get(['2'])) // undefined
let arr = ['3']
map3.set(arr, '3')
console.log(map3.get(arr)) // 3
```
`Map`的键实际上跟内存地址绑定的，只要内存地址不一致，就视为两个键，这样就可以解决同名属性碰撞问题

`Map`内部实行的是严格比较，且`NaN`等于自身
## 属性和方法
- `size`
- `set(key, value)`
- `get(key)`
- `has(key)`
- `delete(key)`
- `clear()`
## 遍历方法
- `keys()`
- `values()`
- `entries()`
- `forEach()`

`Map`的遍历顺序就是插入顺序
