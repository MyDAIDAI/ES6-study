# `let`命令
## 基本用法
`let`添加块级作用域
```
{
  let a = 10;
  var b = 1;
}
console.log(b); // 1
console.log(a); //a is not defined
```
`for`中使用:
```
for (let i = 0; i < 10; i++) {
}
console.log(i) // i is not defined
```
下面的代码最后输出10
```
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  }
}
a[6]() // 9
```
上面的代码为为每一个`a[i]`添加一个闭包，闭包引用了外部变量`i`，由于外部变量`i`是全局变量，并且在不断的改变，所以当执行完后引用的`i`的值就是最后的值
```
var a = []
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 6
```
上面的代码将`i`变为局部变量，`a[i]`中的每一个闭包中引用的都是当前局部作用域中的变量`i`，所以会输出正确结果
```
for (let i = 0; i < 3; i++) {
  let i = 'abc'
  console.log(i) // abc abc abc
}
```
`for`循环的设置循环变量是父作用域，循环体内部是子作用域，后面的会覆盖前面的值，所有连续输出3次`abc`
## 不存在变量提升
```
console.log(foo) // undefined
var foo = 2
console.log(bar) // ReferenceError: bar is not defined
let bar = 4
```
使用`var`命令会将变量提升，然后赋值为`undefined`，直到运行到赋值表达式时才会赋值
但是使用`let`命令不会将变量提升，解释器找不到该变量，会报错
## 不允许重复声明
## 块级作用域
```
var tmp = new Date()
function f() {
  console.log(tmp) // undefined
  if (false) {
    var tmp = 'hello world'
  }
}
f()
```
上面的代码由于没有块级作用域，只有函数作用域，导致`if`中的变量`tmp`进行了变量提升，导致`f()`执行后打印出`undefined`,
```
var tmp = new Date()
function f() {
  console.log(tmp) // 2018-04-27T03:29:49.814Z
  if (false) {
    let tmp = 'hello world'
  }
}
f()
```
在上面的代码中将`if`中变量声明改为`let`，则将`if`变为了块作用域
## 块级作用域与函数声明
ES6中引入了块级作用域，明确允许在块级作用域中声明函数，在块级作用域志宏，函数声明语句的行为类型`let`，在块级作用域之外不可引用。考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
# `const`命令
`const`声明一个只读常量，不能修改
```
const PI = 3.1415926
PI = 3
console.log(PI) // TypeError: Assignment to constant variable.
```
声明就必须初始化
```
const foo; //SyntaxError: Missing initializer in const declaration
```
并且只在块级作用域有效，且不会变量提升

## 顶层对象的属性
`var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
