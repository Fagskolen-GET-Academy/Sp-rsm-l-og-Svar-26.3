// let fruits1 = ['Apple', 'Banana'];
// let fruits2 = fruits1;
// fruits2.push('Orange');

// console.log(fruits1);
// console.log(fruits2);

let fruits1 = ['Apple', 'Banana'];
let fruits2 = [...fruits1];
fruits2.push('Orange');

console.log(fruits1);
console.log(fruits2);