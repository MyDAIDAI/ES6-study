// let obj = new Proxy({}, {
//   get: function (target, key, receiver) {
//     console.log(`getting ${key}`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function (target, key, value, receiver) {
//     console.log(`setting ${key}`);
//     return Reflect.set(target, key, value, receiver)
//   }
// })
// obj.count = 1;
// // setting count
// ++obj.count
// // getting count
// // setting count
//
// let proxy = new Proxy({}, {
//   get: function (target, key) {
//     return 35
//   }
// })
// console.log(proxy.count) // 35
// let proxy = new Proxy(target, handler)
// let proxy =  new Proxy({}, {
//   get: function (target, property) {
//     return 35;
//   }
// })
// console.log(proxy.time) // 35
// console.log(proxy.name) // 35
//
// let proxy1 = new Proxy({}, {})
// proxy1.name = 'name'
// console.log(proxy1.name) // name
// let proxy = new Proxy({}, {
//   get: function (target, property) {
//     return 35
//   }
// })
// let object = Object.create(proxy)
// console.log(object.name) // 35
let handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype
    }
    return 'hello' + name
  },
  apply: function (target, thisBinding, args) {
    return args[0]
  },
  construct: function (target, args) {
    return {value: args[0]}
  }
}
let proxy = new Proxy(function (a, b) {
  return a + b;
}, handler)
console.log(proxy(1, 2)) // 1
console.log(new proxy(1, 2)) // { value: 1 }
console.log(proxy.prototype) // {}
console.log(proxy.foo) // hellofoo