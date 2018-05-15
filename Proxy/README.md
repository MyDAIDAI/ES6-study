# `Proxy`
`Proxy`用于修改某些操作的默认行为，可以理解成，在目标对象之前架设一层"拦截"，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写
```
let obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}`);
    return Reflect.set(target, key, value, receiver)
  }
})
obj.count = 1;
// setting count
++obj.count
// getting count
// setting count

let proxy = new Proxy({}, {
  get: function (target, key) {
    return 35
  }
})
console.log(proxy.count) // 35
```
`get`操作重载了点运算符，也就是用自己的定义覆盖了语言的原始定义
```
let proxy = new Proxy(target, handler)
```
`new Proxy()`表示生成一个`Proxy`实例，`target`表示要拦截的目标对象，`handler`用来定制拦截的行为
```
let proxy =  new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
})
console.log(proxy.time) // 35
console.log(proxy.name) // 35

let proxy1 = new Proxy({}, {})
proxy1.name = 'name'
console.log(proxy1.name) // name
```
注意：若`handler`没有设置任何拦截，那就等同于直接通向原对象
```
let proxy = new Proxy({}, {
  get: function (target, property) {
    return 35
  }
})
let object = Object.create(proxy)
console.log(object.name) // 35
```
`Proxy`实例也可以作为其他对象的原型对象，上面的代码中`proxy`对象是`obj`对象的原型
```
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
```
同一个拦截器`handler`可以设置多个拦截操作，`get`拦截点操作符，`apply`拦截函数调用，`construct`拦截函数实例，下面是`Proxy`支持的拦截操作

- `get(target, propKey, receiver)`: 拦截对象属性的读取，比如`proxy.foo`和`proxy['foo]`
- `set(target, propKey, value, receiver)`: 拦截对象属性的设置
- `has(target, propKey)`: 拦截`propKey in proxy`的操作，返回一个布尔值
- `deleteProperty(target, prooKey)`: 拦截`delete proxy[propKey]`的操作
- `ownKeys(target)`: 拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`
- `getOwnPropertyDescriptor(target, propKey)`: 拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`
- `defineProperty(target, propKey, propDesc)`: 拦截`Object.defineProperty(proxy, propKey, propDesc）`, `Object.defineProperties(proxy, propDescs)`
- `preventExtensions(target)`: 拦截`Object.preventExtensions(proxy)`
- `getPrototypeOf(target)`: 拦截`Object.getPrototypeOf(proxy)`
- `isExtensible(target)`: 拦截`Object.isExtensible(proxy)`
- `setPrototypeOf(target, proto)`: 拦截`Object.setPrototypeOf(proxy, proto)`
- `apply(target, object, args)`: 拦截 Proxy 实例作为函数调用的操作, 比如`proxy(...args)`、`proxy.call(object, ...args))`、`proxy.apply(...)`
- `construct(target, args)`: 拦截 Proxy 实例作为构造函数调用的操作, 比如`new proxy(...args)`