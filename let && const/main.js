// {
//   let a = 10;
//   var b = 1;
// }
// console.log(b);
// console.log(a);
// for (let i = 0; i < 10; i++) {
// }
// console.log(i) // i is not defined
// var a = []
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   }
// }
// a[6]() // 9
// var a = []
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i)
//   }
// }
// a[6]() // 6
// for (let i = 0; i < 3; i++) {
//   let i = 'abc'
//   console.log(i) // abc abc abc
// }
// console.log(foo) // undefined
// var foo = 2
// console.log(bar) // ReferenceError: bar is not defined
// let bar = 4
// var tmp = new Date()
// function f() {
//   console.log(tmp) // 2018-04-27T03:29:49.814Z
//   if (false) {
//     let tmp = 'hello world'
//   }
// }
// f()
// const PI = 3.1415926
// PI = 3
// console.log(PI) // TypeError: Assignment to constant variable.
// const foo; //SyntaxError: Missing initializer in const declaration
