# `Set`数据结构
`Set`类似于数组，但是成员的值具有唯一的，其为一个构造函数，用来生成`Set`数据结构
```
const s = new Set();
[1, 2, 2, 3].forEach((x) => {
  s.add(x);
});
console.log(s); // Set { 1, 2, 3 }
```
`Set`函数可以接受一个数组，或者具有`Iterator`接口的其他数据结构作为参数，用来进行初始化
```
const set = new Set([1, 2, 3, 4, 2, 2]);
console.log(set) // Set { 1, 2, 3, 4 }
// 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组
console.log(...set) // 1 2 3 4
console.log([...set]) // [ 1, 2, 3, 4 ]
```
`Set`内部`NaN`等于自身，所以只能添加一个
```
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
console.log(set); // Set { 1, 2, 3, 4, NaN }
```
##`Set`实例的属性以及方法

### 属性

- `Set.prototype.constructor`: 构造函数
- `Set.prototype.size`: 返回`Set`实例成员的个数

### 方法
- 操作方法
1. 增`add(value)`: 返回`Set`结构
2. 删`delete(value)`: 返回布尔值，表示删除是否成功
3. 查`has(value)`: 返回布尔值，表示该值是否为`Set`的成员
4. 清除`clear()`: 清除所有成员，没有返回值
```
console.log(set.add(9)) // Set { 1, 2, 3, 4, NaN, 9 }
console.log(set.delete(NaN)) // true
console.log(set) // Set { 1, 2, 3, 4, 9 }
console.log(set.has(9)) // true
console.log(set.clear())
console.log(set) // Set {}
```
- 遍历方法
`Set`结构的实例有四个遍历方法，可以用于遍历成员，其遍历顺序与插入顺序一致
1. `keys()`: 返回键名的遍历器
2. `values()`: 返回键值得遍历器
3. `entries()`: 返回键值对的遍历器
4. `forEach()`: 使用回调函数遍历每个成员
```
console.log(newSet.keys()) // [Set Iterator] { 'red', 'black', 'green', 'yellow' }
console.log(newSet.values()) // [Set Iterator] { 'red', 'black', 'green', 'yellow' }
console.log(newSet.entries())
// [Set Iterator] {
//   [ 'red', 'red' ],
//   [ 'black', 'black' ],
//   [ 'green', 'green' ],
//   [ 'yellow', 'yellow' ] }
for (let item of newSet.keys()) {
  console.log(item)
}
// red
// black
// green
// yellow
newSet.forEach((value, key) => {
  console.log(value, key)
})
// red red
// black black
// green green
// yellow yellow
```