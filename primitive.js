/* 

Data Types 

Primitive
1.Number
2.String
3.Boolean 
4.Null 
5.Undefined 
6.Symbol 

Non-Primitive
1.Object 

*/

let a = 'hello';
let b = a;
console.log(a, b);
a = 'gello';
console.log(a, b);

const x = { job: 'web developer' };
const y = x;
console.log(x, y);
// x.job = 'font end developer';
y.job = 'font end developer';
console.log(x, y);
