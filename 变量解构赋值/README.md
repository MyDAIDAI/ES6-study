# 变量的解构赋值
## 数组的解构赋值
### 基本用法
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
```
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) // 1 2 3
let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(foo, bar, baz) // 1 2 3
let [, , third] = [1, 2, 3]
console.log(third) // 3
let [head, ...tail] = [1, 2, 3, 4]
console.log(head, tail) // 1 [ 2, 3, 4 ]
let [x, y, ...z] = [1]
console.log(x, y, z) // 1 undefined []
```
### 默认值
解构赋值允许指定默认值
```
let [foo = true] = []
console.log(foo)
let [x, y = 'b'] = ['a', undefined]
console.log(x, y) // a, b
let [x, y = 'b'] = ['a', null]
console.log(x, y) // a, null
```
只有一个数组成员严格等于`undefined`，默认值才会生效
```
function f() {
  console.log('aaa')
}
let [x = f()] = [1]
console.log(x) // 1
```
上面的代码中由于`x`能够取到值，所以函数`f`根本就不会被执行
```
function f() {
  console.log('aaa') // aaa
}
let [x = f()] = []
console.log(x) // undefined
```
上面的代码中由于`x`不能取到值，会执行`f`函数，由于函数执行后没有返回值，所以`x`的值为`undefined`，下面的代码中`x`的值就等于函数的返回值
```
function f() {
  console.log('aaa') // aaa
  return 1
}
let [x = f()] = []
console.log(x) // 1
```
默认值可以引用解构赋值的其他变量，但该变量必须声明
```
let [x = 1, y = x] = []
console.log(x, y) // 1, 1
let [x = 1, y = x] = [2]
console.log(x, y) // 2, 2
let [x = 1, y = x] = [2, 3]
console.log(x, y) // 2, 3
let [x = y, y = 1] = []
console.log(x, y) //  y is not defined
```
## 对象的解构赋值
```
let {foo, bar} = {foo: '1', bar: '2'}
console.log(foo, bar) // 1, 2
let {bar, foo} = {foo: '1', bar: '2'}
console.log(foo, bar) // 1 2
```
解构赋值与顺序无关，只与属性名有关

若变量名与属性名不一致，则必须写成下面这样，将`foo`获取到的值赋给`baz`，且`foo`的不能在使用
```
let {foo: baz, bar} = {foo: '1', bar: '2'}
console.log(baz, bar) // 1 2
console.log(foo, baz, bar) // ReferenceError: foo is not defined
```
对象的解构赋值是下面的形式的简写：
```
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
```
也就是说真正被赋值的是后者，而不是前者，前者是匹配的模式，后者才是变量

解构也可以用于嵌套解构的对象
```
let obj = {
  p: [
    'hello',
    {
      y: 'world'
    }
  ]
}
let {p: [a, {y: b}]} = obj
console.log(a, b) // hello world
```
在上面的代码中`p`是模式，而不是变量，因此不会被赋值，若`p`也要作为变量赋值，可以写成下面这样
```
let obj = {
  p: [
    'hello',
    {
      y: 'world'
    }
  ]
}
let {p, p: [a, {y, y: b}]} = obj
console.log(p, a, b, y) // [ 'hello', { y: 'world' } ] 'hello' 'world' 'world'
```
可以通过解构赋值为外部的变量赋值
```
let obj = {};
let arr = [];
({foo: obj.prop, bar: arr[0]} = {foo: 1, bar: 2});
console.log(obj, arr); // { prop: 1 } [ 2 ]
```
对象的解构也可以指定默认值
```
let {x = 2} = {}
console.log(x)
let {x = 2, y = 1} = {x: 3, y: 4};
console.log(x, y)
let {x: y = 1} = {x: 2};
console.log(y) // 2
let {x: y = 2} = {x: null}
console.log(y) // null
```
解构失败变量的值等于`undefined`，若解构模式是嵌套的对象，且子对象所在的父属性不存在，那么就会报错
```
let {foo: {bar}} = {baz: 'bar'}
console.log(bar) // TypeError: Cannot destructure property `bar` of 'undefined' or 'null'.
```
由于数组本质是特殊的对象，因此可以对属性进行对象属性的解构，将数组中的值赋给变量
```
let arr = [1, 2, 3];
let {0: first, [arr.length - 1]: last} = arr
console.log(first, last) // 1 3
```
## 字符串的解构赋值
字符串可以转换为一个类似数组的对象，所以可以进行解构赋值
```
let [a, b, c] = 'hello'
console.log(a, b, c) // h e l
```
类似数组的对象中都会有一个`length`属性，因此可以对这个属性进行解构赋值
```
let {length: len} = 'hello'
console.log(len) // 5
```
## 数值和布尔值的解构赋值
数值和布尔值的解构赋值时，会将其转换为对象
```
let {toString: s} = 123
console.log(s) // [Function: toString]
let {toString: b} = true
console.log(b) // [Function: toString]
```
上面的代码中，数值和布尔值的包装对象都有`toString`属性，因此变量都能取到值，

解构赋值的规则是，只要等号右边的值不是数组或者对象，将先将其转换为对象，由于`undefined`和`null`无法转换为对象，所以对它们进行解构赋值，都会报错
```
let {prop: x} = undefined
console.log(x) // Cannot destructure property `prop` of 'undefined' or 'null'
```
## 函数参数的解构赋值
函数的参数也可以使用解构赋值，并且也可以使用默认值
```
function move({x = 0, y = 1}) {
  return [x, y]
}
console.log(move({x: 1, y: 1})) // [1, 1]
console.log(move({y: 0})) // [0, 0]
console.log(move({}))// [0, 1]
```
若在函数的参数中只写解构赋值的左半部分，不写右半部分，则直接调用`move()`函数会报错，如下：
```
function move({x = 0, y = 1}) {
  return [x, y]
}
console.log(move()) // Cannot destructure property `x` of 'undefined' or 'null'
```
所以应该这样写避免报错：
```
function move({x = 0, y = 1} = {}) {
  return [x, y]
}
console.log(move()) // [0, 1]
```
下面的代码会得到不一样的值，执行函数时传入的对象参数会完全覆盖函数声明时的默认值
```
function move({x, y} = {x: 0, y: 0}) {
  return[x, y]
}
console.log(move({x: 3, y: 2})) // [ 3, 2 ]
console.log(move({x: 3})) // [ 3, undefined ]
console.log(move({})) // [ undefined, undefined ]
console.log(move()) // [ 0, 0 ]
```