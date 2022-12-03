/* 
Falsy:
false
0
empty string
undefined
null
NaN
--------------------------
Truthy:
true
any number (positive or negative)
any string including single whitespace, '0'
[]
{}
anything else that is not falsy will be truthy

 */

let x = parseInt('adf');
console.log('value: ', x);
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is Falsy');
}
