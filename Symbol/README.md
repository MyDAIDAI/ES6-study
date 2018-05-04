## 概述
新增的一个数据类型，通过`Symbol`函数生成，表示独一无二的值，`typeof`值得类型为`Symbol`，并且通过`Symbol`同一个字符串的值也不相等
```
let s = Symbol();
let s1 = Symbol('foo');
let s2 = Symbol('foo');
console.log(s1 === s2); // false
console.log(typeof s) // Symbol
```
若`Symbol`函数的参数是一个对象，则会调用对象的`toString`方法，将其转为字符串，再生成一个`Symbol`值
```
let obj = {
  'obj': 'obj',
  toString () {
    return 'toString'
  }
};
console.log(Symbol(obj)) // Symbol(toString)
```
若该对象没有`toString`函数，则打印出`Symbol([object Object])`
```
let obj = {
  'obj': 'obj'
};
console.log(Symbol(obj)) // Symbol([object Object])
```
`Symbol`的值不能与其他类型的值进行运算，会进行报错
```
let s1 = Symbol('foo');
console.log(s1 + 'hello') // Cannot convert a Symbol value to a string
```
但是`Symbol`的值可以显式的转为字符串，然后与其他类型的值进行计算
```
s1 = s1.toString()
console.log(s1 + 'hello') // Symbol(foo)hello
```
除此之外，`Symbol`的值也可以转为布尔值，但是不能转换为数值
```
console.log(Boolean(s1)) // true
console.log(Number(s1)) // NaN
```
## 作为属性名的`Symbol`
`Symbol`的独一无二性可以作为对象的属性名，这样就可以保证不会出现同名的属性，可以防止属性被改写或覆盖
