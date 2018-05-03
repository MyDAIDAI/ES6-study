const s = new Set();
[1, 2, 2, 3].forEach((x) => {
  s.add(x);
});
console.log(s); // Set { 1, 2, 3 }
const set = new Set([1, 2, 3, 4, 2, 2]);
console.log(set) // Set { 1, 2, 3, 4 }
// 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组
console.log(...set) // 1 2 3 4
console.log([...set]) // [ 1, 2, 3, 4 ]
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
console.log(set); // Set { 1, 2, 3, 4, NaN }
// console.log(Set.prototype.constructor)
// console.log(Set.prototype.size)
console.log(set.add(9)) // Set { 1, 2, 3, 4, NaN, 9 }
console.log(set.delete(NaN)) // true
console.log(set) // Set { 1, 2, 3, 4, 9 }
console.log(set.has(9)) // true
console.log(set.clear())
console.log(set) // Set {}
let newSet = new Set(['red', 'black', 'green', 'yellow']);
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